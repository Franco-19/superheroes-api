import './../App.css';
import { Route, Routes} from  "react-router-dom";

// Pages
import Home from '../pages/Home'
import CreateTeam from '../pages/CreateTeam';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTeam />} />
      </Routes>
    </div>
  );
}

export default App;
