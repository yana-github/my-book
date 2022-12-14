const initialState = {
  books: [],
  favourite: false,
};

const bookReducer = (state = initialState, action) => {
  let books;

  switch (action.type) {
    case "ADD_BOOKS":
      return { ...state, books: action.payload };
    case "DELETE_BOOK":
      books = state.books.filter((el) => el.id !== action.payload);
      return { ...state, books: books };
    case "ADD_BOOK_TO_FAV":
      books = state.books.map((el) => {
        if (el.id !== action.payload) {
          return el;
        }
        return { ...el, favourite: true };
      });
      return { ...state, books: books };
    case "REMOVE_BOOK_FROM_FAV":
      books = state.books.map((el) => {
        if (el.id !== action.payload) {
          return el;
        }
        return { ...el, favourite: false };
      });
      return { ...state, books: books };

    default:
      return state;
  }
};

export default bookReducer;