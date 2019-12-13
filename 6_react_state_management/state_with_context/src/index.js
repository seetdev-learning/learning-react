import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { ColorProvider } from './components/ColorContext';


render(
    <ColorProvider>
        <App />
    </ColorProvider>, 
    document.getElementById('root')
);