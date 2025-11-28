import type { Context, Next } from "hono";
import { RateLimiter } from "../configs/rates";

const rateLimiter = new RateLimiter(50, 10 * 60 * 1000);

export const rateLimiterMiddleware = async (c: Context, next: Next) => {
  try {
    const clientIP = c.req.header("CF-Connecting-IP") || c.req.header("X-Real-IP") || c.req.header("X-Forwarded-For") || "unknown";
    if (!rateLimiter.isAllowed(clientIP)) {
      return c.json({ error: "Rate limit exceeded" }, 429);
    }
    await next();
  } catch (error) {
    console.error("Rate limiter middleware error:", error);
    return c.json({ error: "Rate limit exceeded" }, 429);
  }
};
