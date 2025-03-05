import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./vista/LoginPage";
import HomePageStudent from "./vista/HomePageStudent";
import HomePageTeacher from "./vista/HomePageTeacher";
import HomePageAdmin from "./vista/HomePageAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => {}} />} />
        <Route path="/home/estudiante" element={<HomePageStudent />} />
        <Route path="/home/profesor" element={<HomePageTeacher />} />
        <Route path="/home/administrador" element={<HomePageAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
