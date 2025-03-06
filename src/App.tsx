import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./vistas/LoginPage";
import HomePageStudent from "./vistas/HomePageStudent";
import HomePageTeacher from "./vistas/HomePageTeacher";
import HomePageAdmin from "./vistas/HomePageAdmin";

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
