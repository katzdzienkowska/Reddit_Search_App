import React from 'react';
import RedditContainer from "./containers/RedditContainer";
import './App.css'

const App = () => {
  return (
    <main className='app'>
      <h1>Search Reddit Topics</h1>
      <RedditContainer />
    </main>
  );
};

export default App;
