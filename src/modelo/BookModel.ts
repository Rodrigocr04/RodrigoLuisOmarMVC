import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Definición de la interfaz Book
export interface Book {
  id?: string; // Opcional porque Firestore genera el ID automáticamente
  title: string;
  author: string;
  genre: string;
  status: string;
  imageUrl: string;
}

// Función para agregar un libro a Firestore
export const addBook = async (book: Omit<Book, "id">): Promise<void> => {
  try {
    await addDoc(collection(db, "Libros"), book);
    console.log("Libro agregado correctamente");
  } catch (error) {
    console.error("Error al agregar el libro:", error);
    throw error;
  }
};

// Función para obtener todos los libros de Firestore
export const getBooks = async (): Promise<Book[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "Libros"));
    const books: Book[] = [];
    querySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() } as Book);
    });
    return books;
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    throw error;
  }
};

// Función para buscar libros por título o autor
export const searchBooks = async (searchTerm: string): Promise<Book[]> => {
  try {
    const booksRef = collection(db, "Libros");
    const q = query(
      booksRef,
      where("title", ">=", searchTerm),
      where("title", "<=", searchTerm + "\uf8ff")
    );
    const querySnapshot = await getDocs(q);
    const books: Book[] = [];
    querySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() } as Book);
    });
    return books;
  } catch (error) {
    console.error("Error al buscar libros:", error);
    throw error;
  }
};