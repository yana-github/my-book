import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  addBookToFavorites,
  removeBookFromFavorites,
} from "../../redux/book/actions";

import styles from "../../styles/itemPage.module.css";
import ScreenContainer from "../ScreenContsiner";

const ItemPage = () => {
  const navigate = useNavigate();
  const [oneBook, setOneBook] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.book.books);
  const picURL = "https://www.gutenberg.org/cache/epub/";
  const picPath = `${id}/pg${id}.cover.medium.jpg`;

  useEffect(() => {
    const oneBook = booksList.filter((book) => book.id === Number(id));
    setOneBook(oneBook[0]);
  }, [booksList, id]);
  return (
    <ScreenContainer>
      <div className={styles.bookItem}>
        {oneBook && (
          <>
            <div className={styles.itemHead}>
              <h2> 
                {oneBook.title}
              </h2>
              <img
                className={styles.itemImg}
                src={`${picURL}${picPath}`}
                alt="pic"
              />
            </div>
            <div className={styles.itemInfo}>
              <h3>
                <span>Author: </span> {oneBook.authors[0].name}
              </h3>
              <h3>
                <span>Author's life dates: </span>
                {oneBook.authors[0].birth_year} -{" "}
                {oneBook.authors[0].death_year}
              </h3>
              <h3>
                <span>Language: </span>
                {oneBook.languages}
              </h3>
              <h3>
                <span>Subject: </span>
                {oneBook.subjects[0]}
              </h3>
            </div>
                    <div className={styles.itemButtons}>
            <button
              className={styles.itemBtnFav}
              onClick={
                oneBook.favourite !== true
                  ? () => dispatch(addBookToFavorites(oneBook.id))
                  : () => dispatch(removeBookFromFavorites(oneBook.id))
              }
            >
              {oneBook.favourite === true
                ? "Remove from ♥"
                : "Add to ♥"}
            </button>
            <button
              className={styles.itemBtn}
              onClick={() => navigate(`/books/${id}/read`)}
            >
              Open eBook
            </button>
               </div>
          </>
        )}
      </div>
    </ScreenContainer>
  );
};

export default ItemPage;
