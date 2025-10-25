import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    const { nom, email, sujet, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send to admin
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Message: ${sujet}`,
      text: `From: ${nom} <${email}>\n\n${message}`,
    });

    // Send confirmation
    await transporter.sendMail({
      from: `"AeroNova Engineering" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Confirmation de réception",
      text: `Bonjour ${nom},\n\nNous avons bien reçu votre message concernant "${sujet}".\n\nNotre équipe vous répondra dans les plus brefs délais.\n\nCordialement,\nL'équipe AeroNova Engineering`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}
