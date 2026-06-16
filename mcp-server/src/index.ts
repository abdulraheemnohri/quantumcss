import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "node:fs/promises";
import path from "node:path";

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

const COMPONENTS_DIR = path.join(process.cwd(), "../src/components");
const UTILITIES_DIR = path.join(process.cwd(), "../src/utilities");

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_components",
        description: "List all available QuantumCSS components",
        inputSchema: { type: "object", properties: {} },
      },
      {
        name: "get_component_css",
        description: "Get the CSS source code for a specific component",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Name of the component (e.g., 'button')" },
          },
          required: ["name"],
        },
      },
      {
        name: "search_utilities",
        description: "Search for utility classes in QuantumCSS",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Search query (e.g., 'margin', 'flex')" },
          },
          required: ["query"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "list_components") {
      const files = await fs.readdir(COMPONENTS_DIR);
      const components = files.filter(f => f.endsWith(".css")).map(f => f.replace(".css", ""));
      return { content: [{ type: "text", text: components.join(", ") }] };
    }

    if (name === "get_component_css") {
      const componentName = (args as any).name;
      const filePath = path.join(COMPONENTS_DIR, `${componentName}.css`);
      const content = await fs.readFile(filePath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    if (name === "search_utilities") {
      const query = (args as any).query.toLowerCase();
      const files = await fs.readdir(UTILITIES_DIR);
      let results = "";
      for (const file of files) {
        if (file.endsWith(".css")) {
          const content = await fs.readFile(path.join(UTILITIES_DIR, file), "utf-8");
          if (content.toLowerCase().includes(query)) {
            results += `--- ${file} ---\n${content}\n\n`;
          }
        }
      }
      return { content: [{ type: "text", text: results || "No matching utilities found." }] };
    }

    throw new Error(`Tool not found: ${name}`);
  } catch (error: any) {
    return {
      isError: true,
      content: [{ type: "text", text: error.message }],
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("QuantumCSS MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
