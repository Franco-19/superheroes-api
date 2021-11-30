import './../App.css';
import { Route, Routes} from  "react-router-dom";
import { useState } from 'react';

// Pages
import Home from '../pages/Home'
import CreateTeam from '../pages/CreateTeam';

function App() {

  const [teams, setTeams] = useState([]);

  const handleCreatedTeam = (actualTeam) => {
    setTeams(actualTeam)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home teams={teams} />} />
        <Route path="/create" element={<CreateTeam setActualTeam={handleCreatedTeam} teams={teams} />} />
      </Routes>
    </div>
  );
}

export default App;
