import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'yaml';

const EXTENDS_KEYWORD = 'extend';
const INCLUDE_KEYWORD = 'include';

/**
 * A type representing a tokens object.
 */
export interface Tokens {
	[key: string]: string | string[];
}

/**
 * Load a YAML file and parse it into a tokens object.
 *
 * @param filePath The path to the YAML file
 * @returns The parsed tokens object
 */
export function loadYaml(filePath: string): Tokens {
	const fileContents = readFileSync(filePath, 'utf8');
	let tokens = yaml.parse(fileContents) as Tokens;

	/**
	 * If the tokens object has an `extends` key, then load that file and use it as the base tokens object.
	 */
	if (tokens[EXTENDS_KEYWORD]) {
		const baseTokens = loadYaml(
			path.resolve(path.dirname(filePath), tokens.extends as string)
		);
		tokens = { ...baseTokens, ...tokens };
	}

	/**
	 * If the tokens object has an `includes` key, then load those files and use them to extend the tokens object.
	 */
	if (tokens[INCLUDE_KEYWORD]) {
		const tokenIncludeFiles = tokens[INCLUDE_KEYWORD] as string[];
		tokenIncludeFiles.forEach((includePath: string) => {
			const includeTokens = loadYaml(
				path.resolve(path.dirname(filePath), includePath)
			);
			tokens = { ...tokens, ...includeTokens };
		});
	}

	// Remove the `extends` and `includes` keys from the tokens object
	delete tokens[EXTENDS_KEYWORD];
	delete tokens[INCLUDE_KEYWORD];

	return tokens;
}
