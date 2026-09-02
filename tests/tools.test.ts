import { describe, it, expect } from "vitest";
import { getcurrentweatherHandler } from "../src/tools/getcurrentweather";
import { getweatherforecastHandler } from "../src/tools/getweatherforecast";
import { listactivealertsHandler } from "../src/tools/listactivealerts";
import { subscribetoalertsHandler } from "../src/tools/subscribetoalerts";
import { unsubscribefromalertsHandler } from "../src/tools/unsubscribefromalerts";

describe("getCurrentWeather", () => {
  it("returns a content array", async () => {
    const result = await getcurrentweatherHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("getWeatherForecast", () => {
  it("returns a content array", async () => {
    const result = await getweatherforecastHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("listActiveAlerts", () => {
  it("returns a content array", async () => {
    const result = await listactivealertsHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("subscribeToAlerts", () => {
  it("returns a content array", async () => {
    const result = await subscribetoalertsHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("unsubscribeFromAlerts", () => {
  it("returns a content array", async () => {
    const result = await unsubscribefromalertsHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

