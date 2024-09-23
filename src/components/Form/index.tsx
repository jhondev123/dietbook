import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import Button from 'react-bootstrap/Button';
import FormBootstrap from 'react-bootstrap/Form';
import SearchInterface from "../../interfaces/Search";
import { Row, Col, Spinner } from "react-bootstrap";

const Form = ({ onSubmit, loading }) => {
    const [currentWeight, setCurrentWeight] = useState('');
    const [idealWeight, setIdealWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [restrictions, setRestrictions] = useState('');
    const [motivations, setMotivations] = useState('');
    const [routine, setRoutine] = useState('');
    const [structuredAlimentation, setStructuredAlimentation] = useState('');
    const [healthProblems, setHealthProblems] = useState('');
    const [favoriteFoods, setFavoriteFoods] = useState('');
    const [neglectedFoods, setNeglectedFoods] = useState('');
    const [out_of_hours_food, setOut_of_hours_food] = useState('');
    const [alcoholicBeverage, setAlcoholicBeverage] = useState('');
    const [water, setWater] = useState('');
    const [typeOfDiet, setTypeOfDiet] = useState('');
    const [sleep, setSleep] = useState('');
    const [loseWeightBefore, setLoseWeightBefore] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const search: SearchInterface = {
            currentWeight,
            idealWeight,
            height,
            age,
            restrictions,
            motivations,
            routine,
            structuredAlimentation,
            healthProblems,
            favoriteFoods,
            neglectedFoods,
            out_of_hours_food,
            alcoholicBeverage,
            water,
            typeOfDiet,
            sleep,
            loseWeightBefore,

        };

        onSubmit(e, search);
    };


    return (
        <div className={styles.form}>
            <FormBootstrap onSubmit={handleSubmit}>
                <Row>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Qual seu peso atual?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={idealWeight}
                                onChange={(e) => setIdealWeight(e.target.value)}
                                required
                                placeholder="Ex: 70"
                            />
                        </FormBootstrap.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Qual peso você quer chegar? </FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={currentWeight}
                                onChange={(e) => setCurrentWeight(e.target.value)}
                                required
                                placeholder="Ex: 60"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>

                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Qual sua altura em M</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                                placeholder="Ex: 1.70"
                            />
                        </FormBootstrap.Group>
                    </Col>
                    <Col sm={12} md={6}>

                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Idade</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                                placeholder="Ex: 25"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Quais restrições na sua alimentação?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={restrictions}
                                onChange={(e) => setRestrictions(e.target.value)}
                                required
                                placeholder="Ex: sou intolerante a lactose e glúten"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Quais são suas motivações ?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={motivations}
                                onChange={(e) => setMotivations(e.target.value)}
                                required
                                placeholder="Ex: quero melhorar minha saúde"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Com qual frequência prática atividade física? </FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={routine}
                                onChange={(e) => setRoutine(e.target.value)}
                                required
                                placeholder="ex: 3 vezes por semana"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Como é sua alimentação? você possui uma rotina na alimentação ?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={structuredAlimentation}
                                onChange={(e) => setStructuredAlimentation(e.target.value)}
                                required
                                placeholder="Ex: como de 3 em 3 horas"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Você possui problemas de saúde? </FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={healthProblems}
                                onChange={(e) => setHealthProblems(e.target.value)}
                                required
                                placeholder="Ex: pressão alta, diabetes"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Quais são suas comidas favoritas?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={favoriteFoods}
                                onChange={(e) => setFavoriteFoods(e.target.value)}
                                required
                                placeholder="Ex: lasanha, churrasco"
                            />
                        </FormBootstrap.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Quais Comidas você não gosta de comer?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={neglectedFoods}
                                onChange={(e) => setNeglectedFoods(e.target.value)}
                                required
                                placeholder="Ex: brócolis, couve"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Costuma Comer comidas fora de hora?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={out_of_hours_food}
                                onChange={(e) => setOut_of_hours_food(e.target.value)}
                                required
                                placeholder="Ex : sim, como pizza a noite"
                            />
                        </FormBootstrap.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Costuma ingerir bebida alcólica? Com qual frequência</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={alcoholicBeverage}
                                onChange={(e) => setAlcoholicBeverage(e.target.value)}
                                required
                                placeholder="Ex: 1 vez por semana"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Costuma Ingerir bastante água? Quanto?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={water}
                                onChange={(e) => setWater(e.target.value)}
                                required
                                placeholder="Ex: 2 litros por dia"
                            />
                        </FormBootstrap.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Você tem alguma preferência por uma dieta específica, como vegetariana ou vegana?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={typeOfDiet}
                                onChange={(e) => setTypeOfDiet(e.target.value)}
                                required
                                placeholder="Ex: vegetariana"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Como é o seu padrão de sono? Você costuma ter uma boa qualidade de sono?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={sleep}
                                onChange={(e) => setSleep(e.target.value)}
                                required
                                placeholder="Ex: durmo 8 horas por noite"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <FormBootstrap.Group>
                            <FormBootstrap.Label>Você já tentou emagrecer anteriormente? Se sim, quais estratégias utilizou e quais foram os resultados alcançados?</FormBootstrap.Label>
                            <FormBootstrap.Control
                                type="text"
                                value={loseWeightBefore}
                                onChange={(e) => setLoseWeightBefore(e.target.value)}
                                required
                                placeholder="Ex: já fiz dieta da proteína e emagreci 5kg"
                            />
                        </FormBootstrap.Group>
                    </Col>
                </Row>

                <Button type="submit" disabled={loading}>
                    {loading ? 'Carregando...' : 'Enviar'}
                </Button>

                {loading && (
                    <div className="d-flex justify-content-center mt-3">
                        <Spinner animation="border" />
                    </div>
                )}
            </FormBootstrap>

        </div>
    );
};
export default Form;