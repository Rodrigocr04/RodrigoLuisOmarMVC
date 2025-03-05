import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

// Función para agregar un nuevo usuario a la colección 'Usuarios'
export const addUserToFirestore = async (userData: { username: string; email: string; password: string; role: string }) => {
  try {
    console.log("Guardando datos en Firestore:", userData); // Verifica si los datos son correctos
    const docRef = await addDoc(collection(db, "Usuarios"), {
      nombre: userData.username,
      email: userData.email,
      contraseña: userData.password,
      tipo: userData.role,
    });
    console.log("Usuario agregado con ID:", docRef.id); // Asegúrate de que se está generando el ID
  } catch (e) {
    console.error("Error al agregar el documento: ", e);
  }
};
