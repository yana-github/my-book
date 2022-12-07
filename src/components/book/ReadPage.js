import ReactDOM from "react-dom/client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import BookDetails from "./BookDetails";

/* https://www.gutenberg.org/files/2641/2641-0.txt
https://www.gutenberg.org/cache/epub/2641/pg2641-images.html
 */

const ReadPage = ({ onClick, id, title, authors }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [bookDetail, setBookDetail] = useState("bookDetail" | null);

  const url = "https://www.gutenberg.org/cache/epub/2641/pg2641.txt";

  const bookList = useSelector((state) => state.book.books);

  useEffect(() => {
    if (selectedBook !== null) {
      fetchData(selectedBook);
    }
  }, [selectedBook]);

  const fetchData = () => {
    /*     axios.get(`${url}${path}`).then((response) => { */
    axios
      .get(url)
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
    <h1>WOW</h1>

/*     {bookDetail && (
      <>
        <BookDetails bookDetail={bookDetail} url={url} />
      </>
    )} */
  )
/*   ReactDOM.render(<p>Hello</p>, document.getElementById("root"));  
https://www.gutenberg.org/files/2641/2641-0.txt*/
};

export default ReadPage;
