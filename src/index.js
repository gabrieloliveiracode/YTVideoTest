import React from 'react';
import ReactDom from 'react-dom';

// Create a new component to produce html with jsx
const App = () => {
  return <div>Hi You!</div>;
}

// Take this component's generated Html e put it on the page (in the dom)
ReactDom.render(<App />, document.querySelector('.container'));
