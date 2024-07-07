/** @type { import('@storybook/react').Preview } */
import { withThemeByDataAttribute } from '@storybook/addon-themes';

// This is a global file of all styles and components put together
// In production, this is not really used as each component is imported individually
// This is just for the purpose of storybook
import "../../packages/config/dist/styles.css"

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    tags: ['autodocs']
};

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'data-mode',
    })
]

export default preview;
