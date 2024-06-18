import { Hono } from "hono";
import { env, pipeline } from "@xenova/transformers";
import { getEmbedding } from "./embedding";
env.cacheDir = "./.cache";

export const app = new Hono();

app.get("/", async (c) => {
  const embedding = await getEmbedding(pipeline);

  return c.json(embedding);
});