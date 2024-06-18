import { compareToGt } from "./groundTruth.ts";

export async function getEmbedding(pipeline: any) {
    const pipe = await pipeline(
      "feature-extraction",
      "Supabase/gte-small",
    );
  
    const input =
      "Error: `RangeError: Responses with a WebSocket must have status code 101.";
  
    const output = await pipe(input, {
      pooling: "mean",
      normalize: true,
    });
    const embedding = Array.from(output.data);
  
    if (compareToGt(embedding as any)) {
      console.log("Embedding matches ground truth");
    } else {
      console.error("Embedding does not match ground truth");
    }
    return embedding;
  }