import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import contactReducer from "./redux/contactSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
  },
});
