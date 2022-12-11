import { useDispatch } from "react-redux";
import { searchBook } from "../../redux/search/actions";

const Search = ({ books }) => {
  const dispatch = useDispatch();

  const searchingBook = (e) => {
    let inputValue = e.target.value;
    if (books) {
        let copyBooks = [...books];
        if (inputValue) {
          let filterBooks = copyBooks.filter((book) => {
            return book.title
              .toLowerCase()
              .includes(inputValue.toLowerCase().split(" ").join(""));
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