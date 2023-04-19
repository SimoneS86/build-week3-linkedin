import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyProfilePage from './Components/MyProfilePage';
import LinkedinFooter from './Components/LinkedinFooter';
import TopNav from './Components/TopNav';
import JobExperiences from './Components/JobExperiences';

function App() {
  return (
    <div className="App sfondo">
      <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<MyProfilePage prop="5fc4af46b708c200175de88f"/>}/>
        <Route path="/profile/:userId/experiences" element={<JobExperiences prop="5fc4af46b708c200175de88f"/>}/>
      </Routes>
      <LinkedinFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
