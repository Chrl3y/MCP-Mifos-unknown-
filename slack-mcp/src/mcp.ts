import 'dotenv/config';

import express from 'express';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

import { allTools } from '@/tools/index.js';

const server = new McpServer({
  name: 'slack-mcp-server',
  version: '1.0.0',
});

for (const tool of allTools) {
  server.registerTool(tool.name, tool.config as any, tool.callback as any);
}

const app = express();
app.use(express.json());
app.post('/mcp', async (req, res) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  res.on('close', () => {
    transport.close();
  });
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

app.listen(3002, () => {
  console.log('MCP Server is running on port 3002');
});
