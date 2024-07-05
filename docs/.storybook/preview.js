/** @type { import('@storybook/react').Preview } */

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
};

export default preview;
