import { BookDAO } from "../DAO/AppDao";
import { Book } from "../modelo/BookModel";

/**
 * Controlador para agregar un libro.
 * @param book - Datos del libro (sin el campo "id").
 * @returns void
 */

export const handleAddBook = async (book: Omit<Book, "id">): Promise<void> => {
  return BookDAO.addBook(book);
};

/**
 * Controlador para obtener todos los libros.
 * @returns Un array de libros.
 */
export const handleGetBooks = async (): Promise<Book[]> => {
  return BookDAO.getBooks();
};

/**
 * Controlador para buscar libros.
 * @param searchTerm - Término de búsqueda.
 * @returns Un array de libros que coinciden con la búsqueda.
 */
export const handleSearchBooks = async (searchTerm: string): Promise<Book[]> => {
  return BookDAO.searchBooks(searchTerm);
};