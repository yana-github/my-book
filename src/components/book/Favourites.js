import { useDispatch, useSelector } from 'react-redux';
import { removeBookFromFavorites } from "../../redux/book/actions";

import FavouriteItem from "./FavouriteItem";
import Search from './Search';

const Favourites = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.books);
  const searchBook = useSelector((state) => state.search.search);

  const favoriteBook = bookList.filter((book) => book.favourite === true);

  const handleClick = (id) => {
    dispatch(removeBookFromFavorites(id));
    console.log(favoriteBook);
  };

/*   const oneFavBook = favoriteBook.map((book) => {
    return <FavouriteItem key={book.id} {...book} onClick={handleClick} />;
  }); */

  return (
    <>
      <Search bookList={favoriteBook} />
{/*      {oneFavBook}; */}
    {favoriteBook && (searchBook? searchBook: favoriteBook).map((book) => (
   <FavouriteItem key={book.id} {...book} onClick={handleClick} />
    ))}
    </>
    );
  };


export default Favourites;
