import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import thunk from "redux-thunk";
import logger from 'redux-logger';

import bookReducer from "./book/reducer";
import themeReducer from "./theme/reducer";
import searchReducer from './search/reducer';


/* const store = createStore(
  reducer,
  applyMiddleware(logger)
) */
 

const persistConfig = {
  key: "book",
  storage,
};

const reducers = combineReducers({
  book: persistReducer(persistConfig, bookReducer),
  theme: persistReducer(persistConfig,themeReducer),
  search: searchReducer,
});

let store = createStore(reducers, applyMiddleware(thunk,logger));
let persistor = persistStore(store);

export {store, persistor};
