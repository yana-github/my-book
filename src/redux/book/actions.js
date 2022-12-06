export const addBooks = (books) => ({ type: "ADD_BOOKS", payload: books });
export const deleteBook = (id) => ({ type: "DELETE_BOOK", payload: id });
export const addBookToFavorites = (id) => ({
  type: "ADD_BOOK_TO_FAVORITES",
  payload: id,
});
export const removeBookFromFavorites = (id) => ({
  type: "REMOVE_BOOK_FROM_FAVORITES",
  payload: id,
});
