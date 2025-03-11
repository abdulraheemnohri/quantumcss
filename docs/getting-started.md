# Getting Started with QuantumCSS

Welcome to QuantumCSS! This guide will help you get started with the framework, covering installation, basic usage, and how to create your first project.

## Installation

To install QuantumCSS, you can use npm. Run the following command in your terminal:

```
npm install quantumcss
```

## Creating a New Project

Once QuantumCSS is installed, you can scaffold a new project using the QuantumCSS CLI. Run the following command:

```
quantumcss create my-project
```

This will create a new directory called `my-project` with the necessary files and structure.

## Project Structure

Your new project will have the following structure:

```
my-project/
├── src/
│   ├── base/
│   ├── utilities/
│   ├── components/
│   ├── layouts/
│   ├── themes/
│   └── quantum.css
├── dist/
├── docs/
├── tests/
├── postcss.config.js
├── package.json
└── README.md
```

## Adding Components

To add a component to your project, use the CLI command:

```
quantumcss add button
```

This will generate the necessary files and styles for the button component.

## Customizing Themes

QuantumCSS comes with light and dark themes. You can customize these themes by editing the CSS files located in the `src/themes/` directory. 

## Building Your Project

To build your project for production, run:

```
npm run build
```

This will compile your CSS and prepare it for deployment.

## Deployment

You can deploy your project to any hosting platform of your choice. Simply upload the contents of the `dist/` directory to your hosting provider.

## Troubleshooting

### Common Issues

1. **Styles not applying**
   - Check if QuantumCSS is properly imported
   - Verify class names are correct
   - Check browser console for errors

2. **Components not rendering**
   - Ensure all dependencies are installed
   - Check component naming conventions
   - Verify import paths

3. **Build failures**
   - Clear node_modules and package-lock.json
   - Run npm install again
   - Check PostCSS configuration

## Conclusion

You are now ready to start building your projects with QuantumCSS! For more detailed information on utilities, components, and themes, please refer to the other documentation files in the `docs/` directory. Happy coding!