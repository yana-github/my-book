import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookItem from "./BookItem";
import Search from './Search';

import { deleteBook } from "../../redux/book/actions";

import { fetchBooks } from "../../services/books";

const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const searchBook = useSelector((state) => state.search.search);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
       <Search books={books} />
      {books && (searchBook? searchBook: books).map((book) => (
          <BookItem key={book.id} {...book} onClick={handleClick} />
        ))}
      {/* 
<BookList/>  */}
    </>
  );
};

export default BookPage;
