import { UserDAO } from "../DAO/AppDao";
import { User } from "../modelo/UserModel";

/**
 * Controlador para autenticar usuarios.
 * @param username - Nombre de usuario.
 * @param password - Contraseña.
 * @returns Un objeto `User` si la autenticación es exitosa, o `null` si las credenciales son incorrectas.
 */

export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
  return UserDAO.authenticateUser(username, password);
};

/**
 * Controlador para registrar un nuevo usuario.
 * @param userData - Datos del usuario a registrar.
 * @returns void
 */
export const registerUser = async (userData: User): Promise<void> => {
  return UserDAO.registerUser(userData);
};