import configureStore from "./store/configureStore";
import {loadBugs}from'./store/bugs';
const store = configureStore();

store.dispatch(
  loadBugs()
);
// Without action creater
//store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",

//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// });
