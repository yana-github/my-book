import { useDispatch, useSelector } from "react-redux";
import { removeBookFromFavorites } from "../../redux/book/actions";

import FavouriteItem from "./FavouriteItem";

const Favourites = () => {
  const bookList = useSelector((state) => state.book.books);
  //тут получили все книжки, чтобы проверить на флажок

  const dispatch = useDispatch();

  const favoriteBook = bookList.filter((book) => book.favourite === true);
  //тут новый массив из книжек, где избр.=тру

  const handleClick = (id) => {
    dispatch(removeBookFromFavorites(id));
  };

  const oneFavBook = favoriteBook.map((book) => {
    return <FavouriteItem key={book.id} {...book} onClick={handleClick} />;
  });
  console.log(oneFavBook);
  //тут новый массив преобразованных ийтемов

  return <>{oneFavBook};</>;
};

export default Favourites;