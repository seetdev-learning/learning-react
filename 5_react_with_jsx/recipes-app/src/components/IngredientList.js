import React from 'react';
import Ingredient from './Ingredients';

function IngredientList({ list }) {
    return (
        <ul className='ingredients'>
            {
                list.map((ingredient, i) => (
                    <Ingredient key={i} {...ingredient} />
                ))
            }
        </ul>
    );
}

export default IngredientList;