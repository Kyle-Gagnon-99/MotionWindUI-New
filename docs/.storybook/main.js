import path, { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: [
        "../../packages/**/src/*.mdx",
        "../../packages/**/src/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../DesignSystem/*.mdx"
    ],
    addons: [
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath("@storybook/addon-styling-webpack")
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {},
    }
};
export default config;
