import React from 'react';
import GameList from './components/GameList';
import GameForm from './components/GameForm';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Cloud Gaming Platform</h1>
      <GameForm />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Available Games</h2>
      <GameList />
    </div>
  );
}

export default App;
