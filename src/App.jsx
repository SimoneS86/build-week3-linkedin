import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyProfilePage from "./Components/MyProfilePage";
import LinkedinFooter from "./Components/LinkedinFooter";
import TopNav from "./Components/TopNav";
import JobExperiences from "./Components/JobExperiences";
import HomePage from "./Components/Homepage/HomePage";
import Jobs from "./Components/Job";

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
          <Route path="/profile/experiences/:expId" element={<JobExperiences prop="643d132022a6ab00141a8567" />} />
        </Routes>
        <LinkedinFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
