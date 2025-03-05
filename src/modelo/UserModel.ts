export interface User {
    id: string;
    nombre: string;
    contraseña: string;
    tipo: "estudiante" | "profesor" | "administrador";
  }
  