import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  addBookToFavorites,
  removeBookFromFavorites,
} from "../../redux/book/actions";

const ItemPage = () => {
  const [oneBook, setOneBook] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.book.books);

  useEffect(() => {
    const oneBook = booksList.filter((book) => book.id === Number(id));
    setOneBook(oneBook[0]);
    console.log(oneBook);
  }, [booksList, id]);
  return (
    <>
      {oneBook && (
        <>
          <h1>{oneBook.title}</h1>

          
          <h2>{oneBook.authors[0].name}</h2>
          <h4>
            {oneBook.authors[0].birth_year} - {oneBook.authors[0].death_year}{" "}
          </h4>
          <h3>{oneBook.languages}</h3>
          <h3>{oneBook.bookshelves}</h3>

        {/*   <embed src="file.txt"> // This will show the text contained in file.txt in the page */}

        <embed src={oneBook.formats['text/plain']}/>


          <button
            onClick={
              oneBook.favourite !== true
                ? () => dispatch(addBookToFavorites(oneBook.id))
                : () => dispatch(removeBookFromFavorites(oneBook.id))
            }
          >
            {oneBook.favourite === true
              ? "Удалить из избранного"
              : "Добавить в избранное"}
          </button>
          <button>
            <Link to={`/books/${id}/read`}>Читать</Link>
          </button>
        </>

      )}
    </>
  );
};

export default ItemPage;
