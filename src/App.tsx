import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePageStudent from "./components/HomePageStudent";
import HomePageTeacher from "./components/HomePageTeacher";
import HomePageAdmin from "./components/HomePageAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => {}} />} />
        <Route path="/home/student" element={<HomePageStudent />} />
        <Route path="/home/teacher" element={<HomePageTeacher />} />
        <Route path="/home/admin" element={<HomePageAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
