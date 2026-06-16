# Model Context Protocol (MCP) Server

Connect QuantumCSS to your AI coding assistant (like Claude Desktop or VS Code with Roo Code) to build UIs faster with AI.

## Features

The QuantumCSS MCP server provides tools for LLMs to:
- **`list_components`**: See all available pre-built components.
- **`get_component_css`**: Read the source code of any component for styling reference.
- **`search_utilities`**: Find the right utility classes for layout and spacing.

## Setup

### 1. Build the Server

```bash
cd mcp-server
npm install
npm run build
```

### 2. Configure Claude Desktop

Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "quantumcss": {
      "command": "node",
      "args": ["/path/to/quantumcss/mcp-server/dist/index.js"]
    }
  }
}
```

### 3. Usage with AI

You can now ask Claude:
- "Show me how to use the QuantumCSS button component."
- "What are the utility classes for a 3-column grid?"
- "Build me a contact form using QuantumCSS components."
