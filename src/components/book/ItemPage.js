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
  const picURL = "https://www.gutenberg.org/cache/epub/";
  const picPath = `${id}/pg${id}.cover.medium.jpg`;

  useEffect(() => {
    const oneBook = booksList.filter((book) => book.id === Number(id));
    setOneBook(oneBook[0]);
    console.log(oneBook);
  }, [booksList, id]);
  return (
    <>
      {oneBook && (
        <>
          <h2>{oneBook.title}, by {oneBook.authors[0].name}</h2>
          <img src={`${picURL}${picPath}`} alt="pic" />

          <h3>Title: {oneBook.title}</h3>

          <h3>Author: {oneBook.authors[0].name}</h3>
          <h3>
            Author's life dates: {oneBook.authors[0].birth_year} -{" "}
            {oneBook.authors[0].death_year}
          </h3>
          <h3>Language: {oneBook.languages}</h3>
          <h3>Bookshelves: {oneBook.bookshelves}</h3>
          <h3>Subject: {oneBook.subjects[0]}</h3>

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
          <br />
        {/*   <embed src={oneBook.formats["text/plain"]} width="600" height="600" /> */}
        </>
      )}
    </>
  );
};

export default ItemPage;