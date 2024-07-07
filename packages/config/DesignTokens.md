# Design Tokens

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

Design tokens are used to generate CSS and Tailwind CSS configurations for all package components.

## How?

Design tokens are stored in YAML files. These files are then used to generate CSS and Tailwind CSS configurations for all package components. This is done using a python script that reads the YAML file and generates the necessary configurations.

## Files

-   `motionwindui-tokens.yml`: A YAML configuration of design system tokens. This is the main file that stores all the design tokens.
-   `tokens/colors.yml`: A YAML configuration of color tokens. This file is imported into `motionwindui-tokens.yml`.
-   `tokens/spacing.yml`: A YAML configuration of spacing tokens. This file is imported into `motionwindui-tokens.yml`.
-   `tokens/typography.yml`: A YAML configuration of typography tokens. This file is imported into `motionwindui-tokens.yml`.
-   `tokens/styles.yml`: A YAML configuration of style tokens. This file is imported into `motionwindui-tokens.yml`.
-   `tokens/components.yml`: A YAML configuration of component tokens. This file is imported into `motionwindui-tokens.yml`.

## YAML Structure

The YAML structure is used to define and represent a hierarchy of design tokens. Design tokens can end up being quite complex, especially when they support light and dark mode, need to responsive, or need to support multiple states (like hover, focus, etc.). The YAML structure is designed to support these complexities (hopefully).

Each section will have a corresponding token. Each token will have a description and values. The values can be a single value or a list of key-value pairs. For key-value pair values, the key will either be the name of the key (e.g. 50, 100, 200, etc.) or a mode (e.g. light, dark, etc.). Modes are reserved values which can be used to define different values for different modes (e.g. light, dark, etc.).
'light' and 'dark' are reserved modes to provide a basic TailwindCSS dark mode support.

In CSS this would generate as:

```css
:root {
	--surface-primary: var(--some-var);

	.dark {
		--surface-primary: var(--some-other-var);
	}
}
```

Any other mode can be defined and used as needed. They will generate as:

```css
:root[data-theme='some-mode'] {
}
```

In the future, there may be support for inheriting another YAML configuration and merging the values. This would allow for a base configuration to be defined and then extended by other configurations.

### Main YAML Attributes and Keys

-   `includes`: An array of paths to other YAML files to include in the current file.
-   `modes`: The list of modes that CAN be used in a file. This does not mean that every token has to use all modes. This is just a list of modes that can be used (used for validation). The values `light` and `dark` are reserved modes and should not be used in this list.
-   `extends`: This is a possible future feature. This would allow for inheriting another YAML configuration and merging the values. This would allow for a base configuration to be defined and then extended by other configurations.
