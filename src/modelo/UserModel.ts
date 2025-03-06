export interface User {
  id: string;
  username: string; // Cambia 'nombre' a 'username'
  email: string; // Agrega 'email'
  password: string; // Cambia 'contraseña' a 'password'
  role: "estudiante" | "profesor" | "administrador"; // Cambia 'tipo' a 'role'
}
