import React from 'react';

import './global.css';

import Routes from './routes';
//JSX (JavaScript XML )

function App() {

  return (
    <div>
      <Routes />

    </div>
  );
}

export default App;

/*

  let [counter, setCounter] = useState(0);
  //retorna um array [valor, funcao de atualizacao]

  function incrementar() {
    setCounter(counter + 1);
    console.log(counter);
  } */