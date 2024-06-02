import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const persistedContactsReducer = persistReducer(
  {
    key: "selectedContact",
    storage,
    whitelist: ["contact"],
  },
  contactsReducer
);

const persistedfiltersReducer = persistReducer(
  {
    key: "selectedName",
    storage,
    whitelist: ["name"],
  },
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedfiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from "./contactsSlice";
// import { filterReducer } from "./filtersSlice";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contacts",
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactReducer),
//   filters: filterReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
