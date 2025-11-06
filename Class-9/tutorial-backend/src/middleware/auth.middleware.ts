import { type Context, Next } from "hono";
import { decode, sign, verify } from "hono/jwt";

const JWT_SECRET =  "this_is_a_secret_key_for_the_JWT_token"

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


function verifyToken(c: Context, token: string) {
  try {
    const verifiedToken = verify(token, JWT_SECRET, {
      alg: "HS256"
    });
    return verifiedToken;
  } catch (error: any) {
    return new Error("Invalid token");
  }
}
function decodeToken(c: Context, token: string) {
  const decodedToken = decode(token);
  if (decodedToken?.payload?.exp && decodedToken.payload.exp < Date.now() / 1000) {
    return c.json({ message: "Token expired" }, 401);
  }
  return decodedToken;
}

function createToken(c: Context, payload: any) {

  return sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30), // 30 days
    ...payload
  },  JWT_SECRET, "HS256")
}