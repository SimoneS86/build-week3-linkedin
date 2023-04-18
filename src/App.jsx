import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyHomePage from './Components/MyHomePage';
import LinkedinFooter from './Components/LinkedinFooter';
import TopNav from './Components/TopNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<MyHomePage prop="5fc4af46b708c200175de88f"/>}/>
      </Routes>
      <LinkedinFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
