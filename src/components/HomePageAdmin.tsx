import type React from "react"
import { Search, BookOpen, PlusCircle, Trash2, RefreshCw, Users, Bell, Laptop } from "lucide-react"
import { FaArrowLeft } from "react-icons/fa"
import "./HomePage.css"

interface HomePageProps {
  onLogout?: () => void
}

const HomePageAdmin: React.FC<HomePageProps> = ({ onLogout }) => {
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
  ]

  return (
    <div className="home-container">
      <header className="home-header">
        <FaArrowLeft className="back-arrow" onClick={onLogout} title="Regresar a Login" />
        <h1>Biblioteca Club América</h1>
        <p>Perfil</p>
      </header>

      <main className="actions-grid">
        {actions.map((action) => (
          <div key={action.id} className="action-tile" onClick={() => console.log(`Clicked: ${action.title}`)}>
            <div className="action-content">
              {action.icon}
              <h2>{action.title}</h2>
              <p>{action.description}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Biblioteca Club América - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

export default HomePageAdmin