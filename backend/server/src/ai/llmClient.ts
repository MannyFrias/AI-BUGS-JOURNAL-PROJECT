// export async function callLLM(prompt) {
//   // MOCK MODE: this simulates the AI response while we build the app.
//   // Later we will replace this with a real OpenAI request.

//   return "Mock summary: This week you faced some pressure early on, stayed consistent with your tasks, and ended the week feeling more focused and steady.";
// }



import OpenAI from "openai";

export async function callLLM(prompt: string): Promise<string> {
  // If we're still building, we use a fake response.
  if (process.env.MOCK_MODE === "true") {
    return "Mock summary: This week you faced some pressure early on, stayed consistent with your tasks, and ended the week feeling more focused and steady.";
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing in .env");
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const response = await client.chat.completions.create({
    model,
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content:
          "Write a short weekly summary based only on the journal entries. 3–5 sentences, supportive and neutral, no bullet points, no emojis.",
      },
      { role: "user", content: prompt },
    ],
  });

  const text = response.choices[0]?.message?.content?.trim();

  if (!text) {
    throw new Error("No summary returned from OpenAI.");
  }

  return text;
}
