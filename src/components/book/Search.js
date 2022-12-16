import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { searchBook, clearSearch} from "../../redux/search/actions";

const Search = ({searchBooks}) => {
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
    <>
      <input
        type="text"
        placeholder="Поиск книги"
        name="search"
        onChange={searchingBook}
      />
    </>
  );
};

export default Search;
