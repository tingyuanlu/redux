import configureStore from "./store/configureStore";
import * as actions from "./store/api";
const store = configureStore();
store.dispatch(
  actions.apiCallBegan({
    url: "bugs",
    onSuccess: "bugsReceived",
  })
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
