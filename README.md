# MotionWindUI

MotionWindUI is a simple and easy-to-use UI library for React frameworks. MotionWindUI uses React, TypeScript, TailwindCSS, Framer Motion, and Radix UI to create simple, clean, beautiful, and accessible UI components.

## Project Structure

The project is organized into several directories, each of which contains a different type of file:

- `packages`: This directory contains the NPM packages that make up the MotionWindUI library. Each package is a separate NPM package that can be installed and used independently of the others.
- `utils`: This directory contains a collection of utility scripts that are used in various parts of the project. The scripts are organized into subdirectories based on their purpose. Each subdirectory contains a `README.md` file that describes the scripts in that directory. Scripts can be in any language, but most are written in Python. The scripts are designed to be run from the command line, and they typically take command-line arguments to specify their inputs and outputs. It can be combined with NPM scripts to create a more powerful build system.
- `docs`: This directory contains the documentation for the project. The documentation leverages Storybook to provide a live preview of the components in the library. Storybook provides a great way to develop, test, showcase, and document components. It also uses Storybook's MDX and custom stories to allow the documentation of the entire design system.

## Tools

The project uses several tools to help with development and testing:

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static type-checking along with the latest ECMAScript features.
- [TailwindCSS](https://tailwindcss.com/): TailwindCSS is a utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes that can be composed to create custom designs.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion library for React. It provides a simple and powerful API for creating animations and gestures.
- [Radix UI](https://radix-ui.com/): Radix UI is a collection of low-level UI components for React. It provides a set of unstyled components that can be used to build custom designs.
- [Heroicons](https://heroicons.com/): Heroicons is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects.
- [Storybook](https://storybook.js.org/): Storybook is an open-source tool for developing UI components in isolation. It provides a live preview of components and allows you to develop, test, showcase, and document components.
- [Lerna](https://lerna.js.org/): Lerna is a tool for managing JavaScript projects with multiple packages. It optimizes the workflow around managing multi-package repositories with git and npm.

## Installation

To install the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone
    ```

2. Change into the project directory:

    ```bash
    cd motionwind-ui
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Build the project:

    ```bash
    npm run build
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Open the browser and navigate to `http://localhost:3000` to view the project.

## Usage

To use the project, follow these steps:

1. Install the project as described in the Installation section.

2. Import the components you want to use in your project:

    ```tsx
    import { Button } from '@motionwind-ui/button';
    ```

3. Use the components in your project:

    ```tsx
    <Button>Click me</Button>
    ```

4. Customize the components using the provided props:

    ```tsx
    <Button
        variant="primary"
        size="large"
    >
        Click me
    </Button>
    ```

5. View the components in Storybook to see the available props and examples of usage:

    ```bash
    npm run storybook
    ```

6. Build the project for production:

    ```bash
    npm run build
    ```

## Acknowledgements

This project is inspired by several other UI libraries, design systems, and tools, including:

- [NextUI](https://nextui.org/): NextUI is a UI library for React that helps you build beautiful and accessible user interfaces.
- [Heroicons](https://heroicons.com/): Heroicons is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects.
- [TailwindCSS](https://tailwindcss.com/): TailwindCSS is a utility-first CSS framework for rapidly building custom designs.
- [shadcn/ui](https://ui.shadcn.com/): Beautifully designed components that you can copy and paste into your apps.
- [TD Sunshine](https://www.youtube.com/@TDSunshine): TD Sunshine is a channel dedicated to helping you learn Figma and UX design in a fun and engaging way.

Please consider supporting these projects and creators! They have done amazing work and have inspired me to create this project.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more information.

## More Information

This is a passion project that I am working on in my free time!
