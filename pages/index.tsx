import { useState } from 'react';
import axios from 'axios';
import SearchInterface from '../src/interfaces/Search';
import PromptService from '../src/services/PromptService';
import Form from '../src/components/Form';
import Container from 'react-bootstrap/Container';
import DietPlan from '../src/components/DietPlan';

export default function Home() {
    const [response, setResponse] = useState<any>(null); 
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent, search: SearchInterface) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);
        let promptMessage = PromptService(search);

        try {
            const res = await axios.post('/api/chat', { prompt: promptMessage });

            const rawCompletion = res.data.completion;

            const parsedResponse = JSON.parse(rawCompletion);

            if (parsedResponse && parsedResponse.plano_alimentar) {
                setResponse(parsedResponse.plano_alimentar);
            } else {

                setResponse('O plano alimentar não foi encontrado na resposta.');
            }
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            setResponse('Ocorreu um erro, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} loading={loading} />

            {response && typeof response === 'string' && (
                <div>
                    <h2>Resposta:</h2>
                    <p>{response}</p>
                </div>
            )}

            {response && typeof response === 'object' && (
                <DietPlan data={response} />
            )}
        </Container>
    );
}
