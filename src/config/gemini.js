/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

async function runChat(prompt, chatHistory) {
  // console.log(chatHistory.filter((entry) => entry.prompt && entry.response));
  const chatSession = model.startChat({
    generationConfig,
    history: []//chatHistory.map((entry) => ({
    //   role: entry.role,
    //   parts: entry.response,
    // })),
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
  });
  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default runChat;
