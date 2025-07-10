import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const GET: APIRoute = async () => {
  try {
    console.log("Testing Gmail connection...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      requireTLS: true,
    });

    // Test connection
    const isConnected = await transporter.verify();

    return new Response(
      JSON.stringify(
        {
          status: "✅ Gmail connection successful!",
          verified: isConnected,
          config: {
            user: process.env.EMAIL_USER,
            host: "smtp.gmail.com",
            port: 587,
          },
        },
        null,
        2
      ),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Gmail connection test failed:", error);

    return new Response(
      JSON.stringify(
        {
          status: "❌ Gmail connection failed",
          error: {
            message: error.message,
            code: error.code,
            command: error.command,
          },
          troubleshooting: {
            "Check 1": "Verify EMAIL_USER is your full Gmail address",
            "Check 2":
              "Verify EMAIL_PASS is a 16-character app password (not your regular password)",
            "Check 3":
              "Ensure 2-Factor Authentication is enabled on your Google account",
            "Check 4": "Generate a new app password in Google Account settings",
          },
        },
        null,
        2
      ),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
