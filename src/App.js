import React from 'react';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://diafygi.github.io/dice-css/dice-1.0.min.css"
        />
      <Game/>
    </div>
  );
}

export default App;
