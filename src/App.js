import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "./services/books";

import BookPage from "./components/book/BookPage";
import FavoritesPage from "./components/book/FavoritesPage";

import ItemPage from "./components/book/ItemPage";
import ReadPage from "./components/book/ReadPage";

import Menu from "./components/header/Menu";
import './index.css';
import { changeTheme } from "./redux/theme/actions";

//решение
import React, { useState } from "react";
import './index.css';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./components/theme";

const App = () => {


const theme = useSelector((state) => state.theme.theme);

const switchTheme = () => {
  const nextTheme = theme === "dark" ? "light" : "dark";
  dispatch(changeTheme(nextTheme));
};

/* const [theme, setTheme] = useState("light");
const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }; */


  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books]);


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
      <button onClick={switchTheme}>Switch Theme</button>
      <Menu />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/books/:id" element={<ItemPage />} />
       <Route path="/books/:id/read" element={<ReadPage />} />
      </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;