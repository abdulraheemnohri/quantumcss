#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

program
  .name('quantum')
  .description('QuantumCSS CLI tools')
  .version('1.0.0');

program
  .command('create <project-name>')
  .description('Create a new QuantumCSS project')
  .action(async (projectName) => {
    const targetDir = path.resolve(process.cwd(), projectName);
    console.log(chalk.blue(`Creating new project: ${projectName}...`));

    try {
      if (fs.existsSync(targetDir)) {
        console.error(chalk.red(`Error: Directory ${projectName} already exists.`));
        process.exit(1);
      }

      await fs.ensureDir(targetDir);

      // Basic scaffolding
      const template = {
        'package.json': JSON.stringify({
          name: projectName,
          version: '1.0.0',
          scripts: {
            'build': 'postcss src/style.css -o dist/style.css',
            'watch': 'postcss src/style.css -o dist/style.css --watch'
          },
          devDependencies: {
            'postcss': '^8.0.0',
            'postcss-cli': '^10.0.0',
            'quantumcss': '^1.0.0'
          }
        }, null, 2),
        'src/style.css': "@import 'quantumcss';\n\n/* Your custom styles here */",
        'postcss.config.js': "module.exports = {\n  plugins: [\n    require('autoprefixer'),\n    require('cssnano')\n  ]\n};",
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/style.css">
  <title>${projectName}</title>
</head>
<body>
  <div class="q-p-4">
    <h1 class="q-text-primary">Welcome to QuantumCSS</h1>
    <button class="q-btn q-btn-primary q-mt-2">Get Started</button>
  </div>
</body>
</html>`
      };

      for (const [file, content] of Object.entries(template)) {
        await fs.outputFile(path.join(targetDir, file), content);
      }

      console.log(chalk.green(`Successfully created ${projectName}!`));
      console.log(`Next steps:\n  cd ${projectName}\n  npm install\n  npm run build`);
    } catch (err) {
      console.error(chalk.red('Failed to create project:'), err);
    }
  });

program
  .command('add <component-name>')
  .description('Add a new component')
  .action(async (componentName) => {
    console.log(chalk.blue(`Adding component: ${componentName}...`));
    // In a real scenario, this might download or copy from node_modules/quantumcss/src/components
    const componentPath = path.join(__dirname, '../src/components', `${componentName}.css`);
    const destPath = path.join(process.cwd(), 'src/components', `${componentName}.css`);

    try {
      if (!fs.existsSync(componentPath)) {
        console.error(chalk.red(`Error: Component "${componentName}" not found.`));
        return;
      }
      await fs.copy(componentPath, destPath);
      console.log(chalk.green(`Component ${componentName} added to src/components/`));
    } catch (err) {
      console.error(chalk.red('Failed to add component:'), err);
    }
  });

program.parse();
