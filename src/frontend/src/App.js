import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { Teams } from './pages/Teams';
import { HomePage } from './pages/HomePage';
import { ComparePage } from './pages/ComparePage';
function App() {
  return (
    <div className="App">
      {/* <h1>Ipl DashBoard</h1> */}
      <Router>
        <switch>
        <Routes>
          <Route path='home/teams/:teamName/matches/:year' element={<MatchPage/>}/>
        </Routes>
        <Routes>
          <Route path='home/teams/:teamName'element={<TeamPage/>}/>
         </Routes>
         <Routes>
          <Route path='home/teams' element={<Teams/>}/>
         </Routes>

        <Routes>
          <Route path='home/compare' element={<ComparePage/>}/>
        </Routes>

         <Routes>
          <Route path='home' element={<HomePage/>}/>
         </Routes>
         </switch>
      </Router>
  
    </div>
  );
}

export default App;
