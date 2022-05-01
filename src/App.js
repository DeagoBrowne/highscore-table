import allCountryScores from './AllCountryScores';
import './App.css';

import Table from './Table';

function App() {
  return (
    <div className="App">
      <Table scores={allCountryScores} />

    </div>
  );
}

export default App;
