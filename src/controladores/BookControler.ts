import { addBook, getBooks, searchBooks, Book } from "../modelo/BookModel";

// Función para manejar la adición de un libro
export const handleAddBook = async (book: Omit<Book, "id">): Promise<void> => {
  try {
    await addBook(book);
  } catch (error) {
    console.error("Error en el controlador al agregar el libro:", error);
    throw error;
  }
};

// Función para obtener todos los libros
export const handleGetBooks = async (): Promise<Book[]> => {
  try {
    const books = await getBooks();
    return books;
  } catch (error) {
    console.error("Error en el controlador al obtener los libros:", error);
    throw error;
  }
};

// Función para buscar libros
export const handleSearchBooks = async (searchTerm: string): Promise<Book[]> => {
  try {
    const books = await searchBooks(searchTerm);
    return books;
  } catch (error) {
    console.error("Error en el controlador al buscar libros:", error);
    throw error;
  }
};