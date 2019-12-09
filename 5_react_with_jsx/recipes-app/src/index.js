import React from 'react';
import { render } from 'react-dom';
import Menu from './components/Menu';
import data from './data/recipes.json';

render(<Menu recipes={data} />, document.getElementById('root'));
//render(<div>Test</div>, document.getElementById('root'));
