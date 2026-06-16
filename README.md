# QuantumCSS 🚀

A lightweight, modular, and modern CSS framework built for the next generation of web applications.

[![Build Status](https://github.com/abdulraheemnohri/quantumcss/actions/workflows/ci.yml/badge.svg)](https://github.com/abdulraheemnohri/quantumcss/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Modular**: Only include what you need.
- **Themeable**: Built-in support for light and dark modes using CSS variables.
- **Accessible**: Follows WAI-ARIA best practices.
- **Modern**: Uses PostCSS, Autoprefixer, and CSSNano for optimization.
- **CLI Support**: Scaffold projects and add components quickly.

## Installation

```bash
npm install quantumcss
```

## Getting Started

### Using the CLI

Scaffold a new project in seconds:

```bash
npx quantum create my-awesome-app
cd my-awesome-app
npm install
npm run build
```

### Adding Components

Add a specific component to your project:

```bash
npx quantum add button
```

## Usage

Import the main CSS file in your entry point:

```css
@import 'quantumcss/dist/quantum.min.css';
```

Or use specific components:

```css
@import 'quantumcss/src/components/button.css';
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the framework:
   ```bash
   npm run build
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Documentation

Detailed documentation can be found in the `/docs` folder or on our [website](https://quantumcss.netlify.app).

## License

QuantumCSS is released under the [MIT License](LICENSE).
