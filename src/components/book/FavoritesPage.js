import { useDispatch, useSelector } from "react-redux";
import { removeBookFromFavorites } from "../../redux/book/actions";

import FavouriteItem from "./FavouriteItem";

const FavoritesPage = () => {
  const bookList = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  const favoritesBooks = bookList.filter((book) => book.favourite === true);

  const handleClick = (id) => {
    dispatch(removeBookFromFavorites(id));
  };

  const oneFavBook = favoritesBooks.map((book) => {
    return <FavouriteItem key={book.id} {...book} onClick={handleClick} />;
  });
  return <>{oneFavBook}</>;
};

export default FavoritesPage;
