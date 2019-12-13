import React from 'react';
import { useColorDispatch } from './ColorContext';
import { useInput } from './hooks';

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');
    const dispatch = useColorDispatch();
    const submit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add',
            title: titleProps.value,
            color: colorProps.value
        });
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type='text' 
                placeholder='color title...' 
                required 
            />
            <input
                {...colorProps}
                type='color'
                required 
            />
            <button>ADD</button>
        </form>
    );
}