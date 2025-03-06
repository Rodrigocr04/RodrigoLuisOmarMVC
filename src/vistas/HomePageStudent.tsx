import type React from "react";
import { Search, BookOpen } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../components/HomePage.css";

const HomePageStudent: React.FC = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const actions = [
    {
      id: 1,
      title: "Buscar Libro",
      icon: <Search className="action-icon" />,
      description: "Buscar libros en el catálogo",
    },
    {
      id: 2,
      title: "Solicitar Préstamo",
      icon: <BookOpen className="action-icon" />,
      description: "Solicitar préstamo de material bibliográfico",
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <FaArrowLeft
          className="back-arrow"
          onClick={() => navigate("/")} // Redirigir al login
          title="Regresar a Login"
        />
        <h1>Biblioteca Club América</h1>
      </header>

      <main className="actions-grid">
        {actions.map((action) => (
          <div
            key={action.id}
            className="action-tile"
            onClick={() => console.log(`Clicked: ${action.title}`)}
          >
            <div className="action-content">
              {action.icon}
              <h2>{action.title}</h2>
              <p>{action.description}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="home-footer">
        <p>
          © {new Date().getFullYear()} Biblioteca Club América - Todos los
          derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default HomePageStudent;