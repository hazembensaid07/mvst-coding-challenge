import "./App.css";
import ProfilePage from "./pages/ProfilePgae/ProfilePage";
import HomePage from "./pages/HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
