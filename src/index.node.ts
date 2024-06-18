import { serve } from "@hono/node-server";
import { app } from "./index.ts";

serve({ port: 8000, fetch: app.fetch });
