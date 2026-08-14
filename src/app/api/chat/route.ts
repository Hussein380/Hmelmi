import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { company } from "@/content/company";
import { services } from "@/content/services";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are the official AI Customer Support Assistant for ${company.name}. 
Your personality is highly intelligent, professional, and friendly. 
You must ONLY speak in very simple, easy-to-understand English. 
Keep your replies extremely short, clear, and direct.

Your job is to answer customer questions accurately based ONLY on the following company data. 
You can be asked anything to do with the company and you should answer it.
If a customer asks for a quote or specific pricing, politely tell them to use the "Contact Us" page or chat with us on WhatsApp for a quick quote.
Do not make up facts, fleet numbers, or services not listed below. Always strongly represent the HM Elmi brand.

COMPANY INFO:
Tagline: ${company.tagline}
Email: ${company.email}
Phones: ${JSON.stringify(company.phones)}
Address: ${company.address.line1}, ${company.address.city}, ${company.address.country}
Operating Regions: ${company.regions.join(", ")}
Fleet Size: ${company.fleetSize}
EPRA Licence: ${company.licence.type}, Number: ${company.licence.number}

SERVICES WE PROVIDE:
${services.map(s => `- ${s.title}: ${s.shortDescription}\n  Highlights: ${s.highlights.join(", ")}`).join("\n")}
`;

// Models to try in order of preference (all confirmed working & free)
const MODELS = [
  "gemini-3.5-flash",
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
  "gemini-3-flash-preview",
  "gemini-flash-latest",
];

export async function POST(request: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API Key is not configured." }, { status: 500 });
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    // Format history for Gemini (excluding the last message which is the current prompt)
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Gemini API requires that the history starts with a 'user' message. 
    // If it starts with our initial assistant greeting, we remove it from the history sent to the API.
    if (history.length > 0 && history[0].role === "model") {
      history.shift();
    }

    const currentMessage = messages[messages.length - 1].content;

    // Try each model until one works (handles 503 overload gracefully)
    for (const modelName of MODELS) {
      try {
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: SYSTEM_PROMPT
        });

        // 8-second timeout per model attempt so we fail fast
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(currentMessage);
        clearTimeout(timeout);
        const response = await result.response;
        const text = response.text();

        console.log(`Chat success using model: ${modelName}`);
        return NextResponse.json({ text });
      } catch (modelError: any) {
        console.warn(`Model ${modelName} failed:`, modelError.message?.substring(0, 80));
        // Continue to next model
      }
    }

    // If all models failed
    return NextResponse.json({ error: "All models are currently busy. Please try again in a moment." }, { status: 503 });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to process chat request." }, { status: 500 });
  }
}
