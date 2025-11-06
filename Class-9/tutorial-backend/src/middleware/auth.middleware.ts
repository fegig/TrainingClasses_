import { type Context, Next } from "hono";
import { verifyToken } from "../configs/jwt";



export const authMiddleware = (c: Context, next: Next) => {
  const token = c.req.header("Authorization");
  if (!token) {
    return c.json({ message: "Authorization token is required" }, 401);
  }
  const checkBearerToken = token.split(" ");
  if (checkBearerToken.length !== 2 || checkBearerToken[0] !== "Bearer") {
    return c.json({ message: "Bearer token is required" }, 401);
  }

  const verifiedToken = verifyToken(c, checkBearerToken[1]);
  if (verifiedToken instanceof Error) {
    return c.json({ message: verifiedToken.message }, 401);
  }

  return next();
};
