import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyProfilePage from "./Components/MyProfilePage";
import LinkedinFooter from "./Components/LinkedinFooter";
import TopNav from "./Components/TopNav";
import JobExperiences from "./Components/JobExperiences";
import HomePage from "./Components/Homepage/HomePage";

function App() {
  return (
    <div className="App sfondo">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/profile/:userId" element={<HomePage />} />
          <Route path="/" element={<MyProfilePage prop="643d132022a6ab00141a8567" />} />
          <Route path="/profile/:userId/experiences" element={<JobExperiences prop="643d132022a6ab00141a8567" />} />
        </Routes>
        <LinkedinFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
