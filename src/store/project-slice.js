import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectDetail: {},
};

export const projectDetailSlice = createSlice({
  name: "projectDetail",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const items = action.payload;

      state.projectDetail = {
        ...state.projectDetail,
        ...items,
      };
    },
  },
});

export const { addItems } = projectDetailSlice.actions;

export default projectDetailSlice.reducer;
