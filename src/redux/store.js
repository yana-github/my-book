import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import thunk from "redux-thunk";

import bookReducer from "./book/reducer";
import themeReducer from "./theme/reducer";

const reducers = combineReducers({
  book: bookReducer,
  theme: themeReducer,
});


const persistConfig = {
    key: 'root',
    storage,
  }
   

export default createStore(reducers, applyMiddleware(thunk));
