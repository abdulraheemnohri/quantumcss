import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "node:fs/promises";
import path from "node:path";

/**
 * QuantumCSS MCP Server
 * Provides tools for AI assistants to explore and understand the framework.
 */
const server = new Server(
  {
    name: "quantumcss-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/* Resolve component and utility directories relative to the server location */
const COMPONENTS_DIR = path.join(process.cwd(), "../src/components");
const UTILITIES_DIR = path.join(process.cwd(), "../src/utilities");

/**
 * List available tools for the AI assistant.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_components",
        description: "List all available QuantumCSS components (e.g., button, card, modal)",
        inputSchema: { type: "object", properties: {} },
      },
      {
        name: "get_component_css",
        description: "Get the raw CSS source code for a specific framework component",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Name of the component file without extension" },
          },
          required: ["name"],
        },
      },
      {
        name: "search_utilities",
        description: "Search for specific utility classes (spacing, colors, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "The utility pattern to search for (e.g., 'm-4')" },
          },
          required: ["query"],
        },
      },
    ],
  };
});

/**
 * Handle tool execution requests.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    /* Tool: list_components - Scans src/components directory */
    if (name === "list_components") {
      const files = await fs.readdir(COMPONENTS_DIR);
      const components = files.filter(f => f.endsWith(".css")).map(f => f.replace(".css", ""));
      return { content: [{ type: "text", text: components.join(", ") }] };
    }

    /* Tool: get_component_css - Reads a specific .css file */
    if (name === "get_component_css") {
      const componentName = (args as any).name;
      const filePath = path.join(COMPONENTS_DIR, `${componentName}.css`);
      const content = await fs.readFile(filePath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    /* Tool: search_utilities - Greps through utility files for matching patterns */
    if (name === "search_utilities") {
      const query = (args as any).query.toLowerCase();
      const files = await fs.readdir(UTILITIES_DIR);
      let results = "";
      for (const file of files) {
        if (file.endsWith(".css")) {
          const content = await fs.readFile(path.join(UTILITIES_DIR, file), "utf-8");
          if (content.toLowerCase().includes(query)) {
            results += `--- Source: ${file} ---\n${content}\n\n`;
          }
        }
      }
      return { content: [{ type: "text", text: results || "No matching utilities found." }] };
    }

    throw new Error(`Tool not found: ${name}`);
  } catch (error: any) {
    return {
      isError: true,
      content: [{ type: "text", text: `Error executing ${name}: ${error.message}` }],
    };
  }
});

/**
 * Start the server using STDIO transport.
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("QuantumCSS MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
