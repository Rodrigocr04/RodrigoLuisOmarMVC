import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { User } from "../modelo/UserModel";;

export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
  try {
    const usersRef = collection(db, "Usuarios");
    const q = query(
      usersRef,
      where("nombre", "==", username),
      where("contraseña", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const userData = querySnapshot.docs[0].data() as User;
    return userData;
  } catch (error) {
    console.error("Error al autenticar:", error);
    throw new Error("Error al autenticar usuario");
  }
};