import React from 'react';

interface MealOptions {
    opcaoPrincipal: string;
    opcaoAlternativa: string;
}

interface PlanoAlimentar {
    [key: string]: MealOptions;
}

interface DietPlanProps {
    data: PlanoAlimentar;
}

const DietPlan: React.FC<DietPlanProps> = ({ data }) => {
    // Verifica se 'data' é um objeto e não está vazio
    const meals = data && typeof data === 'object' ? Object.keys(data) : [];
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Plano Alimentar</h2>
            <div className="row">
                {meals.map((meal) => (
                    <div key={meal} className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">{meal.replace(/_/g, ' ')}</h5>
                                <p className="card-text">
                                    <strong>Opção Principal:</strong> {data[meal].opcaoPrincipal}
                                </p>
                                <p className="card-text">
                                    <strong>Opção Alternativa:</strong> {data[meal].opcaoAlternativa}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DietPlan;
