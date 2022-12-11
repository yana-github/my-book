const initialState = {
    search: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOK':
            return { ...state, search: action.payload };

        default:
            return state;
    }
};

export default searchReducer;