import { v4 } from 'uuid';
import React, { createContext, useState, useReducer } from 'react';
import colorData from '../data/color-data';

const ColorStateContext = React.createContext()
const ColorDispatchContext = React.createContext()

const colorReducer = (colors, action) => {
    const { type } = action;
    switch (type) {
        case 'add': {
            const { title, color } = action;
            return [
                ...colors,
                {
                    id: v4(),
                    rating: 0,
                    title, color
                }
            ];
        }
        case 'rate': {
            const { id, rating } = action;
            return colors.map(color => (color.id === id ? { ...color, rating } : color));
        }
        case 'remove': {
            const { id } = action;
            return colors.filter(color => color.id !== id);
        }  
        default: {
            throw new Error(`Unhandled action type: ${type}`);
        }
    }
};

const ColorProvider = ({ children }) => {
    const [ colors, dispatch ] = useReducer(colorReducer, colorData)
    return (
        <ColorStateContext.Provider value={colors}>
            <ColorDispatchContext.Provider value={dispatch}>
                {children}
            </ColorDispatchContext.Provider>
        </ColorStateContext.Provider>
    );
}

function useColorState() {
    const context = React.useContext(ColorStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a ColorProvider')
    }
    return context;
}

function useColorDispatch() {
    const context = React.useContext(ColorDispatchContext)
    if (context === undefined) {
        throw new Error('useColorDispatch must be used within a ColorProvider')
    }
    return context;
}

export { ColorProvider, useColorState, useColorDispatch };