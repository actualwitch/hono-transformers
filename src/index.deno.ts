import { Hono } from "hono";
import { env, pipeline } from "../../transformers.js/dist/transformers.js";
import { getEmbedding } from "./embedding.ts";
env.cacheDir = "./.cache";

const app = new Hono();

app.get("/", async (c) => {
  const embedding = await getEmbedding(pipeline);
  return c.json(embedding);
});

export default app;
