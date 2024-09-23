import { useState } from 'react';
import axios from 'axios';


import SearchInterface from '../src/interfaces/Search';

import PromptService from '../src/services/PromptService';

import Form from '../src/components/Form';
import Container from 'react-bootstrap/Container';

export default function Home() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent,search:SearchInterface) => {
        e.preventDefault();
        setLoading(true);
        setResponse(''); 
        let promptMessage = PromptService(search);
        try {
            const res = await axios.post('/api/chat', { prompt: promptMessage });
            setResponse(res.data.completion);
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            setResponse('Ocorreu um erro, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} loading={loading}/>

            {response && (
                <div>
                    <h2>Resposta:</h2>
                    <p>{response}</p>
                </div>
            )}
        </Container>
    );
}
