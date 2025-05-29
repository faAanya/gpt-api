import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config();

const OpenAIApiKey = process.env.OPEN_API_KEY;

if (!OpenAIApiKey) {
    console.error("OPEN_API_KEY is not set");
    process.exit();
}

const openai = new OpenAI({
    apiKey: OpenAIApiKey,
});

export default openai;