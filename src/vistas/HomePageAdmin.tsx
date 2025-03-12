import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, PlusCircle, Trash2, RefreshCw, Users, Bell, Laptop } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import "../components/HomePage.css";
import { handleAddBook } from "../controladores/BookControler";
import { Book } from "../modelo/BookModel";

const HomePageAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const [newBook, setNewBook] = useState<Omit<Book, "id">>({
    title: "",
    author: "",
    genre: "",
    status: "Disponible",
    imageUrl: "",
  });

  // Función para manejar el clic en "Agregar Libro"
  const handleAddBookClick = () => {
    setShowForm(true);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleAddBook(newBook);
      console.log("Libro agregado exitosamente");
      setShowForm(false);
      setNewBook({ // Resetear el formulario
        title: "",
        author: "",
        genre: "",
        status: "Disponible",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error al agregar el libro:", error);
    }
  };

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

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
    {
      id: 3,
      title: "Agregar Libro",
      icon: <PlusCircle className="action-icon" />,
      description: "Añadir nuevo libro al inventario",
      onClick: handleAddBookClick,
    },
    {
      id: 4,
      title: "Eliminar Libro",
      icon: <Trash2 className="action-icon" />,
      description: "Eliminar libro del catálogo",
    },
    {
      id: 5,
      title: "Actualizar Libro",
      icon: <RefreshCw className="action-icon" />,
      description: "Modificar información de libros",
    },
    {
      id: 6,
      title: "Gestionar Usuarios",
      icon: <Users className="action-icon" />,
      description: "Administrar usuarios del sistema",
    },
    {
      id: 7,
      title: "Notificar Vencimiento",
      icon: <Bell className="action-icon" />,
      description: "Enviar alertas de vencimiento",
    },
    {
      id: 8,
      title: "Solicitar Laptop",
      icon: <Laptop className="action-icon" />,
      description: "Solicitar préstamo de equipos",
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <FaArrowLeft
          className="back-arrow"
          onClick={() => navigate("/")}
          title="Regresar a Login"
        />
        <h1>Biblioteca Club América</h1>
      </header>

      <main className="actions-grid">
        {actions.map((action) => (
          <div
            key={action.id}
            className="action-tile"
            onClick={action.onClick || (() => console.log(`Clicked: ${action.title}`))}
          >
            <div className="action-content">
              {action.icon}
              <h2>{action.title}</h2>
              <p>{action.description}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Modal para agregar libro */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Agregar Nuevo Libro</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Título:</label>
                <input
                  type="text"
                  name="title"
                  value={newBook.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Autor:</label>
                <input
                  type="text"
                  name="author"
                  value={newBook.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Género:</label>
                <input
                  type="text"
                  name="genre"
                  value={newBook.genre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Estado:</label>
                <select
                  name="status"
                  value={newBook.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Disponible">Disponible</option>
                  <option value="Prestado">Prestado</option>
                </select>
              </div>
              <div className="form-group">
                <label>URL de la imagen:</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={newBook.imageUrl}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancelar
                </button>
                <button type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Biblioteca Club América - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default HomePageAdmin;