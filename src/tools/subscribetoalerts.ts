/**
 * subscribeToAlerts — Registers an email address to receive notifications when new alerts are issued for a region.
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function subscribetoalertsHandler(args: { body: Record<string, any> }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement subscribeToAlerts — received ${JSON.stringify(args)}` }],
  };
}
