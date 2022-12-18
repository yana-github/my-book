import { useDispatch, useSelector } from "react-redux";
import { removeBookFromFavorites } from "../../redux/book/actions";

import FavouriteItem from "./FavouriteItem";
import Search from "./Search";
import styles from "../../styles/favorites.module.css";

const Favourites = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.books);
  const searchFavBook = useSelector((state) => state.search.search);
  const favoritesBooks = bookList.filter((book) => book.favourite === true);

  const handleClick = (id) => {
    dispatch(removeBookFromFavorites(id));
  };

  return (
    <div className={styles.container}>
      <Search searchBooks={favoritesBooks} />
      {favoritesBooks &&
        (searchFavBook ? searchFavBook : favoritesBooks).map((book) => (
          <FavouriteItem key={book.id} {...book} onClick={handleClick} />
        ))}
    </div>
  );
};

export default Favourites;
