import React from 'react';
import Search from './components/search';
import Results from './components/results';
import Header from './components/header';
import './App.css';


const App = () =>{
    return(
      <div className="App" id="root">
        <div className="container">
          <Header />
          <Search />
          <Results />
        </div>
      </div>
    );
}

export default App;
