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
        <Route path="/" element={<MyProfilePage prop="643d01c1186a8700143867c7"/>}/>
        <Route path="/profile/:userId/experiences" element={<JobExperiences prop="643d01c1186a8700143867c7"/>}/>
      </Routes>
      <LinkedinFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;