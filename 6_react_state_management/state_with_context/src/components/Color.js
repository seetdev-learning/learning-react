import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useColorDispatch } from './ColorContext';
import StarRating from './StarRating';

export default function Color({
    id,
    title,
    color,
    rating
}) {
    const dispatch = useColorDispatch();
    return (
        <section>
            <h1>{title}</h1>
            <button>
                <FaTrash color='red' onClick={ () => dispatch({ type: 'remove', id }) } />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={ rating => dispatch({ type: 'rate', id, rating }) }
            />            
        </section>
    );
}
