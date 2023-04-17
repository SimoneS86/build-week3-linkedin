import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LinkedinFooter from './Components/LinkedinFooter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LinkedinFooter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
