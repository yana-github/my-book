import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchBook, clearSearch } from "../../redux/search/actions";

import styles from "../../styles/search.module.css";
import iconSearch from "../../images/icons-search.png";

const Search = ({ searchBooks }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearch());
  }, []);

  const searchingBook = (e) => {
    let inputValue = e.target.value;
    if (searchBooks) {
      let copyBooks = [...searchBooks];
      if (inputValue) {
        let filterBooks = copyBooks.filter((book) => {
          return book.title.toLowerCase().includes(inputValue.toLowerCase());
        });

        dispatch(searchBook(filterBooks));
      } else {
        dispatch(searchBook(null));
      }
    }
  };

  return (
    <form className={styles.searchForm}>
      <img className={styles.searchFormIco} src={iconSearch} alt="iconSearch" />
      <input
        className={styles.searchFormInput}
        type="search"
        placeholder="Search..."
        name="search"
        autoComplete="off"
        onChange={searchingBook}
      />
    </form>
  );
};

export default Search;
