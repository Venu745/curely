import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

console.log("API KEY LOADED:", !!process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Healthcare backend is running",
  });
});

// Support form
app.post("/api/support", (req, res) => {
  const {
    name,
    phone,
    email,
    category,
    message,
  } = req.body;

  console.log("New Support Request:");
  console.log({
    name,
    phone,
    email,
    category,
    message,
  });

  res.status(200).json({
    success: true,
    message: "Your support request has been sent successfully.",
  });
});

// AI Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Please enter a message.",
      });
    }

    const patientChart = `
Last visit: August 20, 2026
Blood pressure: 128/82 mmHg
Heart rate: 74 bpm
Temperature: 98.4 F
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `
You are a healthcare chart assistant.

You can ONLY answer questions using the patient information provided below.

Patient chart:
${patientChart}

Patient question:
${message}

Rules:
- Only use information from the patient chart.
- Never invent patient information.
- If the answer is not available in the chart, say:
  "I couldn't find that information in the patient's chart."
- Do not diagnose diseases.
- Do not recommend or change medications.
- Do not make medical decisions.
- If the user asks for medical advice, recommend contacting a qualified healthcare professional.
- Keep the answer simple and clear.
`,
    });

    res.status(200).json({
      reply: response.text,
    });

  } catch (error) {
  console.error("========== GEMINI ERROR ==========");
  console.error(error);
  console.error("==================================");

  res.status(500).json({
    reply: "Sorry, I couldn't process your question.",
  });
}
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});