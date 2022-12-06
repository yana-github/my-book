import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import BookDetails from "./BookDetails";

/*     useEffect(() => {
        axios.get('https://www.gutenberg.org/cache/epub/').then((response) => {
          const books = response.data.results;
          setBooks(books);
          console.log(books);
        });
      }, []); 
      
          const [books, setBooks] = useState(null);*/

/* https://www.gutenberg.org/files/2641/2641-0.txt
https://www.gutenberg.org/cache/epub/2641/pg2641-images.html
 */

const ReadPage = ({ onClick, id, title, authors }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [bookDetail, setBookDetail] = useState("bookDetail" | null);

  const url = "https://www.gutenberg.org/cache/epub/2641/pg2641.txt.utf8";

  /* const url = "https://www.gutenberg.org/cache/epub/";
const path = `${id}/pg${id}-images.html`; */

  const bookList = useSelector((state) => state.book.books);

  useEffect(() => {
    if (selectedBook !== null) {
      fetchData(selectedBook);
    }
  }, [selectedBook]);

  const fetchData = () => {
    /*     axios.get(`${url}${path}`).then((response) => { */
    axios
      .get("https://www.gutenberg.org/cache/epub/2641/pg2641.qrcode.png")
      .then((response) => {
        const bookDetail = response.data;
        setBookDetail(bookDetail);
      });
    console.log(bookDetail);
  };

  if (!bookList) {
    return <h1>ЗАГРУЗКА</h1>;
  }
  return (
    <>
      <h1>WOW</h1>
      {bookDetail && (
        <>
          <BookDetails bookDetail={bookDetail} url={url} />
        </>
      )}
    </>
  );
};

export default ReadPage;
