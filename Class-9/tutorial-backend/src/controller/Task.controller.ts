import { Hono } from "hono";

const invertTripleController = new Hono();

invertTripleController.post("/", async (c) => {
  const body = await c.req.json();
  const num = body.number;
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return c.json({ error: "Payload must be an integer in number field." }, 400);
  }
  const reversed = parseInt(num.toString().split("").reverse().join(""), 10);
  const ans = reversed * 3;
  return c.json({ ans });
});

export default invertTripleController;



