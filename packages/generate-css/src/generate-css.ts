#!/usr/bin/env node
'use strict';
import yargs, { Arguments } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { loadYaml, Tokens } from './yamlUtils';
import { existsSync, writeFileSync } from 'fs';

const LIGHT_RESERVED_KEYWORD = 'light';
const DARK_RESERVED_KEYWORD = 'dark';

/**
 * General arguments for generating files
 */
interface GenerateArguments extends Arguments {
	input: string;
	output: string;
}

interface CssOutput {
	default: string[];
	modes: Record<string, string[]>;
}

yargs(hideBin(process.argv))
	.option('i', {
		alias: 'input',
		demandOption: true,
		describe: 'Input YAML design token file',
		type: 'string',
	})
	.option('o', {
		alias: 'output',
		demandOption: true,
		describe: 'Output CSS file',
		type: 'string',
	})
	.command(
		['css', '$0'],
		'Generates a resulting CSS file',
		() => {},
		(argv) => {
			generateCssMain(argv as unknown as GenerateArguments);
		}
	)
	.parseSync();

function generateCssMain(argv: GenerateArguments) {
	console.log(argv.input, argv.output);
	generateCssFile(argv.input, argv.output);
}

function generateCss(
	tokens: Tokens,
	prefix = '--',
	isFirst: boolean = true
): CssOutput {
	const defaultCss: string[] = [];
	const modeCss: Record<string, string[]> = {};

	/**
	 * Recursive function to add tokens to the CSS output
	 * @param tokenDict The dictionary of tokens
	 * @param prefix The prefix to add to the CSS variable
	 * @param isFirst If this prefix is the first one
	 */
	function addTokens(
		tokenDict: Tokens,
		prefix: string,
		isFirst: boolean = true
	) {
		console.log(`Working on ${prefix}`);
		// Loop through the dictionary of the loaded YAML configs
		for (const key in tokenDict) {
			// Set the first value. It can be any type
			const value = tokenDict[key];

			// Check if the value of the current key is an array of strings and has a 'values' key in it
			if (value && typeof value === 'object' && 'values' in value) {
				// The list of values
				const values = value['values'];

				// Next check if there is a 'light' and 'dark' key, if so this is a key with a light and dark mode
				if (values && typeof values === 'string') {
					defaultCss.push(`\t${prefix}${key}: ${values}`);
				} else if (
					LIGHT_RESERVED_KEYWORD in values &&
					DARK_RESERVED_KEYWORD in values
				) {
					// First push the "light" mode (which is just the default CSS)
					defaultCss.push(
						`\t${prefix}${key}: ${values[LIGHT_RESERVED_KEYWORD]};`
					);

					// Next if there is no dark mode in modeCss, create it
					if (!modeCss[DARK_RESERVED_KEYWORD])
						modeCss[DARK_RESERVED_KEYWORD] = [];

					// Finally add the dark mode to the modeCss
					modeCss[DARK_RESERVED_KEYWORD].push(
						`\t${prefix}${key}: ${values[DARK_RESERVED_KEYWORD]};`
					);

					// There is a modes keyword meaning that this variable supports multiple modes
				} else if ('modes' in values) {
					const modeValues = values['modes'] as string[];

					// Loop through each mode
					for (const mode in modeValues) {
						// If there is no mode yet, add it
						if (!modeCss[mode]) modeCss[mode] = [];

						// Finally add the mode
						modeCss[mode].push(
							`\t${prefix}${key}: ${modeValues[mode]};`
						);
					}

					// There are no light, dark, or other modes, but it still has a value key so it must be a map of values to add
				} else if (typeof values === 'object') {
					for (const subKey in values as Record<string, string>) {
						const subValue = values[subKey];
						console.log(subKey, subValue);
						defaultCss.push(
							`\t${prefix}${key}-${subKey}: ${subValue};`
						);
					}
				}
			} else if (value && typeof value === 'object') {
				const skipKey = isFirst ? '' : `${key}-`;
				addTokens(value, `${prefix}${skipKey}`, false);
			}
		}
	}

	addTokens(tokens, prefix, isFirst);

	console.log(tokens);

	return { default: defaultCss, modes: modeCss };
}

function generateCssFile(inputPath: string, outputPath: string): void {
	const tokens = loadYaml(inputPath);
	const { default: defaultCss, modes: modeCss }: CssOutput =
		generateCss(tokens);

	const cssContent = [];

	// Add Tailwind CSS
	cssContent.push('@tailwind base;');
	cssContent.push('@tailwind components;');
	cssContent.push('@tailwind utilities;');
	cssContent.push('');
	cssContent.push('@layer base {');

	// Add .dark class with contents under :root
	if (modeCss[DARK_RESERVED_KEYWORD]) {
		cssContent.push(':root {');
		cssContent.push(...defaultCss);
		cssContent.push('');
		cssContent.push('.dark {');
		cssContent.push(...modeCss[DARK_RESERVED_KEYWORD]);
		cssContent.push('}');
		cssContent.push('}');
	} else {
		cssContent.push(':root {\n');
		cssContent.push(...defaultCss);
		cssContent.push('');
		cssContent.push('}');
	}

	cssContent.push('}');
	cssContent.push('');

	// Loop through each mode and add the CSS content
	for (const mode in modeCss) {
		if (mode === DARK_RESERVED_KEYWORD) {
			//cssContent.push('.dark {', ...modeCss[mode], '}');
		} else {
			cssContent.push(
				`:root[data-theme="${mode}"] {`,
				...modeCss[mode],
				'}'
			);
		}
	}

	// If the output path is not a CSS file, add the CSS extension
	if (!outputPath.endsWith('.css')) {
		outputPath += '.css';
	}

	// If the file already exists, delete it
	if (existsSync(outputPath)) {
		console.log(`Deleting existing file at ${outputPath}`);
		writeFileSync(outputPath, '', 'utf8');
	}

	// Write the CSS content to the file
	writeFileSync(outputPath, cssContent.join('\n'), 'utf8');
	console.log(`CSS file generated at ${outputPath}`);
}
