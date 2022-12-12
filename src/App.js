import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "./services/books";

import BookPage from "./components/book/BookPage";
import FavoritesPage from "./components/book/FavoritesPage";

import ItemPage from "./components/book/ItemPage";
import ReadPage from "./components/book/ReadPage";

import Menu from "./components/header/Menu";

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books]);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/books/:id" element={<ItemPage />} />
       <Route path="/books/:id/read" element={<ReadPage />} />
      </Routes>
    </>
  );
};

export default App;
