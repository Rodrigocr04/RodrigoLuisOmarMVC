import { addUserToFirestore } from "./firebaseUtils";
import { User } from "../modelo/UserModel";

export const registerUser = async (userData: User): Promise<void> => {
  try {
    console.log("Registrando usuario:", userData);
    await addUserToFirestore(userData);
    console.log("Usuario registrado en Firestore");
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
};
