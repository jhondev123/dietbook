// pages/api/chat.ts

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt não pode estar vazio' });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo', 
                messages: [{ role: 'user', content: prompt }],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        const completion = response.data.choices[0].message.content;
        res.status(200).json({ completion });
    } catch (error) {
        console.error('Erro ao fazer requisição à OpenAI:', error);
        res.status(500).json({ error: 'Erro interno do servidor, ' + error });
    }
}
