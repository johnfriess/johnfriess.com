import { configureStore } from "@reduxjs/toolkit";
import {
  Projects,
} from "../Api/api";

export default configureStore({
  reducer: {
    [Projects.reducerPath]: Projects.reducer,
  },
});
