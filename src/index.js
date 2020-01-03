import React from 'react';
import ReactDOM from 'react-dom';
const word = 'set';
const element = <h1> when this method is used to {word} content.</h1>

ReactDOM.render(element, document.getElementById('heading'));

function Button(properties){
    return <button type="submit">{properties.label} </button>
}
ReactDOM.render(<Button label="Save"/>, document.getElementById('btnSave'));
ReactDOM.render(<Button label="Delete"/>, document.getElementById('btnDelete'));
ReactDOM.render(<Button label="Reset"/>, document.getElementById('btnReset'));

