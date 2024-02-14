import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { generateImagePrompt } from "@/lib/openai";


export async function POST(req:Request) {
    // Authentication
    const { userId } = auth();
    if (!userId) {
        return new NextResponse('unauthorized', {status:401});
    }

    const body = await req.json();
    const { name } = body;
    const image_description = await generateImagePrompt(name);
    console.log({ image_description });
    return new NextResponse('ok');
}