import { Link } from "react-router-dom";
import styles from "../styles/bookItem.module.css";

const BookItem = ({ onClick, id, title, authors }) => {
  const picURL = "https://www.gutenberg.org/cache/epub/";
  const picPath = `${id}/pg${id}.cover.medium.jpg`;

  return (
    <div className={styles.container}>
      <div className={styles.bookItem}>
        <div className={styles.bookItemImg}>
          <img src={`${picURL}${picPath}`} alt="pic" />
        </div>
        <div className={styles.bookItemInfo}>
          <div className={styles.bookItemHead}>
          <h2>{title}</h2>
          <h3>{authors[0].name}</h3>
          </div>

          <div className={styles.bookItemButtons}>
            <button className={styles.bookItemBtn}>
              <Link to={`/books/${id}`}>Подробнее</Link>
            </button>
            <button className={styles.bookItemBtnDel} onClick={() => onClick(id)}>
              Удалить
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default BookItem;
