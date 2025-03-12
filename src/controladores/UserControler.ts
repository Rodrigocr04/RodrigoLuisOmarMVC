import { UserDAO } from "../DAO/AppDao";
import { User } from "../modelo/UserModel";

/**
 * Controlador para registrar un nuevo usuario en la base de datos Firestore.
 * @param userData - Objeto que contiene los datos del usuario a registrar.
 * @returns void (promesa que se resuelve cuando el usuario es agregado correctamente).
 */

export const registerUser = async (userData: User): Promise<void> => {
  try {
    // Llama al método del DAO para registrar el usuario
    await UserDAO.registerUser(userData);
  } catch (error) {
    // Captura y muestra cualquier error ocurrido durante el registro
    console.error("Error al registrar usuario:", error);
  }
};