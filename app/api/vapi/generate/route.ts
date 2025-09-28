import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";
import { adminDB } from "@/firebase/admin";
import { generateInterviewQuestionsPrompt, getFallbackQuestions } from "@/lib/prompts/interview";

export async function GET() {
    return Response.json({success:true,data:'Thank you'},{status:200})
}

export async function POST(request:Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();
    
    try {
        let questions;
        
        try {
            const { text: generatedQuestions } = await generateText({
                model: google("gemini-2.0-flash-001"),
                prompt: generateInterviewQuestionsPrompt(role, level, techstack, type, amount),
            });
            questions = JSON.parse(generatedQuestions);
        } catch (aiError) {
            console.warn("AI service unavailable, using fallback questions:", aiError);
            questions = getFallbackQuestions(role, techstack, amount);
        }

        const interview = {
            role, type, level,
            techstack: techstack.split(','),
            questions,
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString()
        }

        await adminDB.collection("interviews").add(interview);
        
        return Response.json({success:true},{status:200});
    } catch (error) {
        console.error(error);
        return Response.json({success:false, error: error},{status:500})
    }
}