import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { Web3, NET } from '@dioxide-js/web3.js';
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { decode } from 'base64-arraybuffer'

const web3 = new Web3(NET.TEST);
const server = new McpServer({
  name: "dioxide",
  version: "1.0.0",
});

server.tool('faucet', { address: z.string() }, async ({ address }) => {
  const txnHash = await web3.txn.transfer({
    to: address,
    amount: '100000000',
    secretKey: new Uint8Array(decode('KHwdnMOhputNfUWjqhKECx7CeBjgZoWhen0dgsXS34k=')),
  })
  console.log('faucet:', address, txnHash)
  return {
    content: [{ type: "text", text: txnHash }]
  };
})



async function createServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

createServer().catch(err => {
  console.error(err);
  process.exit(1);
});