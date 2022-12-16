
import { useDispatch, useSelector } from "react-redux";

import BookItem from "./BookItem";
import Search from './Search';

import { deleteBook } from "../../redux/book/actions";



const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const searchBook = useSelector((state) => state.search.search);



  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
       <Search searchBooks={books} />
      {books && (searchBook? searchBook: books).map((book) => (
          <BookItem key={book.id} {...book} onClick={handleClick} />
        ))}
    </>
  );


};

export default BookPage;