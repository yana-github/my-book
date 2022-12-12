import { Route, Routes } from "react-router-dom";

import BookPage from "./components/book/BookPage";
import FavoritesPage from "./components/book/FavoritesPage";

import ItemPage from "./components//book/ItemPage";
/* import ReadPage from "./components//book/ReadPage"; */

import Menu from "./components/header/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/books/:id" element={<ItemPage />} />
  {/*       <Route path="/books/:id/read" element={<ReadPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
