import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  try {
    // Debug: Check if environment variables are loaded
    console.log("Environment variables check:");
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "NOT SET");
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Set" : "NOT SET");
    console.log("EMAIL_TO:", process.env.EMAIL_TO ? "Set" : "NOT SET");

    const formData = await request.formData();
    const name = formData.get("from_name") as string;
    const email = formData.get("reply_to") as string;
    const message = formData.get("message") as string;

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(
        "Missing required environment variables: EMAIL_USER or EMAIL_PASS"
      );
      return new Response(
        JSON.stringify({ error: "Email service not configured properly" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create transporter with simplified Gmail configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Where you want to receive emails
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This email was sent from your portfolio contact form.
      `,
      replyTo: email,
    };

    // Send email with detailed error logging
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);

      return new Response(
        JSON.stringify({ message: "Email sent successfully!" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (emailError: any) {
      console.error("Detailed email error:", {
        message: emailError.message,
        code: emailError.code,
        command: emailError.command,
        response: emailError.response,
      });

      // Provide more specific error messages
      let errorMessage = "Failed to send email";
      if (emailError.code === "EAUTH") {
        errorMessage =
          "Email authentication failed. Please check your email credentials.";
      } else if (emailError.code === "ECONNECTION") {
        errorMessage =
          "Could not connect to email server. Please try again later.";
      }

      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process contact form" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
