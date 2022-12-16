const initialState = {
  search: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BOOK":
      return { ...state, search: action.payload };

    case "SEARCH_FAV_BOOK":
      return { ...state, search: action.payload };

      case "CLEAR_SEARCH":
        return {...state, search: null};

    default:
      return state;
  }
};

export default searchReducer;
