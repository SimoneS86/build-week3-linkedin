import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LinkedinFooter from './Components/LinkedinFooter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import JobExperiences from './Components/JobExperiences';
import AddExperience from './Components/AddExperience';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JobExperiences />} />
        <Route path='/add-experience' element={<AddExperience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
