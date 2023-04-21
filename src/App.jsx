import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyProfilePage from "./components/MyProfilePage";
import LinkedinFooter from "./components/LinkedinFooter";
import TopNav from "./components/TopNav";
import JobExperiences from "./components/JobExperiences";
import HomePage from "./components/Homepage/HomePage";
import Jobs from "./components/Job";

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
          <Route path="/profile/:userId/experiences" element={<JobExperiences prop="643d132022a6ab00141a8567" />} />
        </Routes>
        <LinkedinFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
