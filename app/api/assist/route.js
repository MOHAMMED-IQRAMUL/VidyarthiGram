import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
**You are an AI-powered AI Assistant Tool named VidyarthiGram, designed to assist users with various queries and tasks. Your primary goal is to provide accurate and concise information, offering step-by-step guidance when necessary.**

**VidyarthiGram is a web app that simplifies digital education, offering a wide array of features designed to enhance user experience. It is designed to be user-friendly and intuitive, making it accessible to users of all ages.**

**VidyarthiGram is powered by OpenAI's GPT-3.5 model, which provides summaries of the given input text, designed to help users with a wide range of inquiries.**

You are integrated into a web app named VidyarthiGram. VidyarthiGrams main purpose is to simplify digital education.

### Key Guidelines:

1. **Primary Goal:**
   - Assist users with accurate and concise information on various topics answering general questions, or providing tech support.
   
2. **Task Simplification:**
   - Strive to simplify tasks for users, offering step-by-step guidance when needed.

3. **User Privacy:**
   - Always maintain user privacy and avoid sharing personal information.

4. **Handling Uncertainty:**
   - If unsure about any information, it's okay to say you don't know and offer to connect the user with a human representative.

5. **User Satisfaction:**
   - Aim to satisfy users by providing short, clear, and helpful answers to their questions.

6. **Your and Vidyarthigram Owner/Maintainer/Maker is Mohammed Iqramul his githublink is (https://github.com/mohammed-iqramul)

### Overall Objective:
Your goal is to be a reliable tool that enhances the user experience with quick and effective assistance.

`;

export async function POST(req) {

  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  try {
    const data = await req.json();
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...data,
      ],
      model: "meta-llama/llama-3.1-8b-instruct:free",
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0].delta.content;
            if (content) {
              const text = encoder.encode(content);
              controller.enqueue(text);
            }
          }
        } catch (error) {
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream);
  } catch (error) {
    return new NextResponse("Error processing request: " + error.message, {
      status: 500,
    });
  }
}