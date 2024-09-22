import SearchInterface from '../interfaces/Search';
export default function PrompService(search: SearchInterface) {
    return `
        Persona: 
        Atue como um Nutricionista especialista em emagrecimento.
        Objetivo:
        Quero que você desenvolva um plano alimentar de emagrecimento a partir do questionário abaixo.
        Contexto:
        Qual é o seu peso atual e qual é o seu peso ideal? ${search.currentWeight}kg e ${search.idealWeight}kg
        Qual é a sua altura? ${search.height}m
        Qual é a sua idade? ${search.age}
        Você possui alguma restrição alimentar, alergia ou intolerância a algum alimento?${search.restrictions}
        Quais são suas principais motivações para emagrecer?${search.motivations}
        Você pratica algum tipo de atividade física regularmente? Se sim, com que frequência e intensidade?${search.routine}
        Você tem uma alimentação estruturada ou costuma comer fora de casa?${search.structuredAlimentation}
        Você tem algum problema de saúde pré-existente, como diabetes, hipertensão, colesterol alto ou problemas de tireoide? ${search.healthProblems}
        Quais são os alimentos que você mais gosta e os que menos gosta?${search.favoriteFoods} e ${search.neglectedFoods}
        Você costuma beliscar entre as refeições? Se sim, quais são os alimentos que geralmente escolhe?${search.out_of_hours_food}
        Você consome bebidas alcoólicas regularmente? Se sim, com qual frequência?${search.alcoholicBeverage}
        Qual é a sua ingestão de água diária?${search.water}
        Você tem alguma preferência por uma dieta específica, como vegetariana, vegana, low carb, entre outras?${search.typeOfDiet}
        Como é o seu padrão de sono? Você costuma ter uma boa qualidade de sono?${search.sleep}
        Você já tentou emagrecer anteriormente? Se sim, quais estratégias utilizou e quais foram os resultados alcançados?${search.loseWeightBefore}
        Direcionamento:
        Para todas as refeições, traga pelo menos uma opção alternativa, para caso o paciente não possua o alimento em casa. Não dê explicações e seja cuidadoso na resposta.
    `;
}
