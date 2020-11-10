import React from 'react';
import ReactDOM from 'react-dom';

const random = Math.floor(Math.random() * 2);
const item = (
<h1>{ random === 0 ? 'heads' : 'tails' }</h1>
);
ReactDOM.render(item, document.getElementById('coin'))


