import './../App.css';
import { Route, Routes} from  "react-router-dom";
import { useState } from 'react';

// Pages
import Home from '../pages/Home'
import CreateTeam from '../pages/CreateTeam';

function App() {

  const [team, setTeam] = useState([]);

  const handleCreatedTeam = (actualTeam) => {
    setTeam(actualTeam)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home teams={team} />} />
        <Route path="/create" element={<CreateTeam setActualTeam={handleCreatedTeam} teams={team} />} />
      </Routes>
    </div>
  );
}

export default App;
