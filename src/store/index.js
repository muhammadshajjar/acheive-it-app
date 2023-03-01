import { configureStore } from "@reduxjs/toolkit";
import projectSliceReducer from "./project-slice";

const store = configureStore({
  reducer: {
    projectDetail: projectSliceReducer,
  },
});

export default store;
