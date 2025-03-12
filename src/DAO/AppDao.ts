import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { User } from "../modelo/UserModel";
import { Book } from "../modelo/BookModel";

/**
 * DAO para manejar operaciones relacionadas con usuarios.
 */

export class UserDAO {
  /**
   * Autentica a un usuario en Firestore.
   * @param username - Nombre de usuario.
   * @param password - Contraseña.
   * @returns Un objeto `User` si la autenticación es exitosa, o `null` si las credenciales son incorrectas.
   */

  static async authenticateUser(username: string, password: string): Promise<User | null> {
    try {
      const usersRef = collection(db, "Usuarios");
      const q = query(usersRef, where("nombre", "==", username), where("contraseña", "==", password));
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
  }

  /**
   * Registra un nuevo usuario en Firestore.
   * @param userData - Datos del usuario a registrar.
   * @returns void
   */

  static async registerUser(userData: User): Promise<void> {
    try {
      // Muestra en consola los datos del usuario antes de registrarlo
      console.log("Registrando usuario:", userData);

      // Agrega el usuario a Firestore
      await addDoc(collection(db, "Usuarios"), {
        nombre: userData.username,
        email: userData.email,
        contraseña: userData.password,
        tipo: userData.role,
      });

      // Mensaje de confirmación si el registro fue exitoso
      console.log("Usuario registrado en Firestore");
    } catch (error) {
      // Captura y muestra cualquier error ocurrido durante el registro
      console.error("Error al registrar usuario:", error);
      throw error;
    }
  }
}

/**
 * DAO para manejar operaciones relacionadas con libros.
 */

export class BookDAO {
  /**
   * Agrega un libro a Firestore.
   * @param book - Datos del libro (sin el campo "id").
   * @returns void
   */
  static async addBook(book: Omit<Book, "id">): Promise<void> {
    try {
      await addDoc(collection(db, "Libros"), book);
      console.log("Libro agregado a Firestore");
    } catch (error) {
      console.error("Error al agregar el libro:", error);
      throw error;
    }
  }

  /**
   * Obtiene todos los libros de Firestore.
   * @returns Un array de libros.
   */
  static async getBooks(): Promise<Book[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "Libros"));
      return querySnapshot.docs.map((doc) => doc.data() as Book);
    } catch (error) {
      console.error("Error al obtener los libros:", error);
      throw error;
    }
  }

  /**
   * Busca libros en Firestore según un término de búsqueda.
   * @param searchTerm - Término de búsqueda.
   * @returns Un array de libros que coinciden con la búsqueda.
   */
  static async searchBooks(searchTerm: string): Promise<Book[]> {
    try {
      const booksRef = collection(db, "Libros");
      const q = query(booksRef, where("titulo", "==", searchTerm));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => doc.data() as Book);
    } catch (error) {
      console.error("Error al buscar libros:", error);
      throw error;
    }
  }
}