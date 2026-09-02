/**
 * getWeatherForecast — Returns a daily forecast for the given location for up to 14 days.
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function getweatherforecastHandler(args: { lat: number; lon: number; days?: number }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement getWeatherForecast — received ${JSON.stringify(args)}` }],
  };
}
