import { Configuration, OpenAIApi} from 'openai';
require('dotenv').config();



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);



export const ChatGPT = async (prompt: string) => {

    let _prompt: string = prompt.replace('$gpt', '').replace('$gpt-tts', '');

    const request = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: _prompt,
        temperature: 0.2,
        max_tokens: 1024,

    });
    console.log(request)

    
    const response: string = request.data.choices[0].text.replace('\n', '').replace('\n', '');

    return response
};
console.log(ChatGPT)
ChatGPT('$gpt-audio qual é o status da sua api neste momento')
console.log(ChatGPT)
