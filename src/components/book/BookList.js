/* import { useDispatch, useSelector } from "react-redux";

import BookItem from "./BookItem";

import { deleteBook } from "../../redux/book/actions";

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.books);

  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };

  const items = bookList.map((book) => (
    <BookItem key={book.id} {...book} onClick={handleClick} />
  ));
  return <>{items}</>;
};

export default BookList;
 */
