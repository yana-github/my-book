import { useDispatch, useSelector } from "react-redux";
import { removeBookFromFavorites } from "../../redux/book/actions";

import FavouriteItem from "./FavouriteItem";
import Search from "./Search";

const FavoritesPage = () => {
  const bookList = useSelector((state) => state.book.books);
  const searchBook = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  const favoritesBooks = bookList.filter((book) => book.favourite === true);

  const handleClick = (id) => {
    dispatch(removeBookFromFavorites(id));
  };

  const oneFavBook = (searchBook? searchBook: favoritesBooks).map((book) => {
    return <FavouriteItem key={book.id} {...book} onClick={handleClick} />;
  });

  return (
    <>
      <Search books={favoritesBooks} />
      {oneFavBook}
    </>
  );
};

export default FavoritesPage;
