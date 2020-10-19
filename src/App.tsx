import React from 'react';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header as='h1'>React Redux Sample</Header>
      <Counter />
    </div>
  );
}

export default App;
