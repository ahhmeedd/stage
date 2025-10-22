// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { nom, email, sujet, message } = req.body;

    // Send to admin
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Message: ${sujet}`,
      text: `From: ${nom} <${email}>\n\n${message}`
    });

    // Send confirmation
    await transporter.sendMail({
      from: `"AeroNova Engineering" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Confirmation de réception',
      text: `Bonjour ${nom},\n\nNous avons bien reçu votre message concernant "${sujet}".\n\nNotre équipe vous répondra dans les plus brefs délais.\n\nCordialement,\nL'équipe AeroNova Engineering`
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend/dist"))); 

// Fallback for React Router or other SPA routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});