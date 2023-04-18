import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopNav from "./components/TopNav";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Profile />
    </div>
  );
}

export default App;
