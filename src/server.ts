import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { getcurrentweatherHandler } from "./tools/getcurrentweather.js";
import { getweatherforecastHandler } from "./tools/getweatherforecast.js";
import { listactivealertsHandler } from "./tools/listactivealerts.js";
import { subscribetoalertsHandler } from "./tools/subscribetoalerts.js";
import { unsubscribefromalertsHandler } from "./tools/unsubscribefromalerts.js";

/**
 * Build a fresh MCP server instance.
 *
 * We export a FACTORY rather than a singleton so the HTTP
 * transport can hand each new session its own `McpServer`.
 * The MCP SDK rejects a second `initialize` on the same
 * Server instance, so a per-session factory is mandatory
 * for the streamable-http transport.
 */
export function createServer(): McpServer {
  const server = new McpServer({
    name: "Weather & Alerts API",
    version: "0.1.0",
  });

  // ---------- Tools ----------
  server.registerTool("getCurrentWeather", {
    description: "Returns the current temperature, conditions, and wind for a latitude/longitude pair.",
    inputSchema: { lat: z.number(), lon: z.number(), units: z.string().optional() },
  }, getcurrentweatherHandler);

  server.registerTool("getWeatherForecast", {
    description: "Returns a daily forecast for the given location for up to 14 days.",
    inputSchema: { lat: z.number(), lon: z.number(), days: z.number().optional() },
  }, getweatherforecastHandler);

  server.registerTool("listActiveAlerts", {
    description: "Returns currently active severe-weather alerts (storms, floods, heat) for a named region.",
    inputSchema: { region: z.string(), severity: z.string().optional() },
  }, listactivealertsHandler);

  server.registerTool("subscribeToAlerts", {
    description: "Registers an email address to receive notifications when new alerts are issued for a region.",
    inputSchema: { body: z.record(z.any()) },
  }, subscribetoalertsHandler);

  server.registerTool("unsubscribeFromAlerts", {
    description: "Removes an existing alert subscription by its ID.",
    inputSchema: { subscriptionId: z.string() },
  }, unsubscribefromalertsHandler);

  // ---------- Resources ----------
  server.registerResource("CurrentWeather", "", {
    description: "",
    mimeType: "application/json",
  }, async (uri) => ({
    contents: [{ uri: uri.href, text: "TODO: return resource contents" }]
  }));

  server.registerResource("ForecastDay", "", {
    description: "",
    mimeType: "application/json",
  }, async (uri) => ({
    contents: [{ uri: uri.href, text: "TODO: return resource contents" }]
  }));

  server.registerResource("WeatherAlert", "", {
    description: "",
    mimeType: "application/json",
  }, async (uri) => ({
    contents: [{ uri: uri.href, text: "TODO: return resource contents" }]
  }));

  server.registerResource("AlertSubscription", "", {
    description: "",
    mimeType: "application/json",
  }, async (uri) => ({
    contents: [{ uri: uri.href, text: "TODO: return resource contents" }]
  }));

  // ---------- Prompts ----------
  server.registerPrompt("Weather & Alerts API - Overview", {
    description: "Read-heavy weather/forecast/alerts API — a classic \"tool\" style MCP server (an LLM assistant calling out for live external data) plus one write operation (subscribe) and one delete (unsubscribe) to exercise both GET-only tools and mutation tools in the same server.\n",
    argsSchema: {},
  }, async (args) => ({
    messages: [{ role: "user" as const, content: { type: "text" as const, text: `` } }]
  }));

  return server;
}
