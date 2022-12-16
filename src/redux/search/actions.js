export const searchBook = (books) => ({
    type: 'SEARCH_BOOK', payload: books,
});

export const searchFavbook = (favoritesBooks) => ({
    type: 'SEARCH_FAV_BOOK', payload: favoritesBooks,
});

export const clearSearch = () => ({
    type: 'CLEAR_SEARCH',
});