import React from 'react';
import Header from './components/header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header>
        <p>This is child of header</p>
      </Header>
      <p>This is test</p>
    </div>
  );
}

export default App;
