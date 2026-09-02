/**
 * listActiveAlerts — Returns currently active severe-weather alerts (storms, floods, heat) for a named region.
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function listactivealertsHandler(args: { region: string; severity?: string }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement listActiveAlerts — received ${JSON.stringify(args)}` }],
  };
}
