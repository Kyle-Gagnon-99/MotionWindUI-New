/** @type { import('@storybook/react').Preview } */

// Include Tailwind CSS in your Storybook preview
import "../../packages/base/dist/styles.css";
import "../../packages/button/src/Button.css";

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
