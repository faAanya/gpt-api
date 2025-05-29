import openaiClient from "./api.js";

const generate = async (queryDesc) => {
    const response = await openaiClient.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "user", content: queryDesc }
        ],
        max_tokens: 100,
        temperature: 0
    });

    return response.choices[0].message.content;
}

export default generate;