import axios from "axios";
import { addBooks } from "../redux/book/actions";

export const fetchBooks = () => {
  return function (dispatch) {
    axios.get("https://gutendex.com/books/").then((response) => {
      const books = response.data.results;
      dispatch(addBooks(books));
    });
  };
};
