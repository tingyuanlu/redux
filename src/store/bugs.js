//action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOVLED = "bugResovled";

//actions
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: { description: description },
});
export const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: {
    id,
  },
});
export const bugResolved = (id) => ({
  type: BUG_RESOVLED,
  payload: {
    id: id,
  },
});
//reducer must be default export
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          description: action.payload.description,
          id: ++lastId,
          resolved: true,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOVLED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
