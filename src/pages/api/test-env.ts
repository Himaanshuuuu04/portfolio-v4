import type { APIRoute } from "astro";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const GET: APIRoute = async () => {
  const envCheck = {
    EMAIL_USER: process.env.EMAIL_USER ? "✅ Set" : "❌ NOT SET",
    EMAIL_PASS: process.env.EMAIL_PASS ? "✅ Set" : "❌ NOT SET",
    EMAIL_TO: process.env.EMAIL_TO ? "✅ Set" : "❌ NOT SET",
    NODE_ENV: process.env.NODE_ENV || "development",
  };

  return new Response(JSON.stringify(envCheck, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
