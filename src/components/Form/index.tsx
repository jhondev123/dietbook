import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import Button from 'react-bootstrap/Button';
import FormBootstrap from 'react-bootstrap/Form';
import SearchInterface from "../../interfaces/Search";
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
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Peso Atual</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={currentWeight}
                        onChange={(e) => setCurrentWeight(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Peso Ideal</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={idealWeight}
                        onChange={(e) => setIdealWeight(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Altura</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Idade</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Restrições</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={restrictions}
                        onChange={(e) => setRestrictions(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Motivações</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={motivations}
                        onChange={(e) => setMotivations(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Rotina</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={routine}
                        onChange={(e) => setRoutine(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Alimentação Estruturada</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={structuredAlimentation}
                        onChange={(e) => setStructuredAlimentation(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Problemas de Saúde</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={healthProblems}
                        onChange={(e) => setHealthProblems(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Comidas Favoritas</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={favoriteFoods}
                        onChange={(e) => setFavoriteFoods(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Comidas Negligenciadas</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={neglectedFoods}
                        onChange={(e) => setNeglectedFoods(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Comidas Fora de Hora</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={out_of_hours_food}
                        onChange={(e) => setOut_of_hours_food(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Bebida Alcoólica</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={alcoholicBeverage}
                        onChange={(e) => setAlcoholicBeverage(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Água</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Tipo de Dieta</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={typeOfDiet}
                        onChange={(e) => setTypeOfDiet(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Sono</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={sleep}
                        onChange={(e) => setSleep(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <FormBootstrap.Group>
                    <FormBootstrap.Label>Perdeu Peso Antes</FormBootstrap.Label>
                    <FormBootstrap.Control
                        type="text"
                        value={loseWeightBefore}
                        onChange={(e) => setLoseWeightBefore(e.target.value)}
                        required
                    />
                </FormBootstrap.Group>
                <Button type="submit" disabled={loading}>
                    {loading ? 'Carregando...' : 'Enviar'}
                </Button>
            </FormBootstrap>

        </div>
    );
};
export default Form;