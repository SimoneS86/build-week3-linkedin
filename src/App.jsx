import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
<<<<<<< HEAD
import MyProfilePage from "./components/MyProfilePage";
import LinkedinFooter from "./components/LinkedinFooter";
import TopNav from "./components/TopNav";
import JobExperiences from "./components/JobExperiences";
import HomePage from "./components/Homepage/HomePage";
import Jobs from "./components/Job";
=======
import MyProfilePage from "./Components/MyProfilePage";
import LinkedinFooter from "./Components/LinkedinFooter";
import TopNav from "./Components/TopNav";
import JobExperiences from "./Components/JobExperiences";
import HomePage from "./Components/Homepage/HomePage";
import Jobs from "./Components/Jobs";
>>>>>>> origin/Salvatore

function App() {
  return (
    <div className="App sfondo">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<MyProfilePage />} />
          <Route path="/profile/:userId" element={<MyProfilePage />} />
          <Route path="/jobs" element={<Jobs />} />
<<<<<<< HEAD
          <Route path="/profile/:userId/experiences" element={<JobExperiences prop="643d132022a6ab00141a8567" />} />
=======
          <Route path="/profile/:userId/experiences" element={<JobExperiences prop="643d01c1186a8700143867c7" />} />
>>>>>>> origin/Salvatore
        </Routes>
        <LinkedinFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;