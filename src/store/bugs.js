import { createAction, createReducer } from "@reduxjs/toolkit";

export const bugAdded = createAction("bugUpdated");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");
//reducer must be default export
let lastId = 0;

export default createReducer([], {
  //key:value
  //actions:funcitons(event=>event hander)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});
