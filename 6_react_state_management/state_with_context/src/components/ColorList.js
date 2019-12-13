import React from 'react';
import { useColorState } from './ColorContext';
import Color from './Color';

export default function ColorList() {
    const colors = useColorState();
    return (
        <div>
            {colors.length === 0 ? (
                <p>No Colors Listed. (Add a Color)</p>
            ) : (
                colors.map(color => (
                    <Color key={color.id} {...color} />
                ))
            )}
        </div>
    );
}