import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    //action=>action handler
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
