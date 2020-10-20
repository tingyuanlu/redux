import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store change");
});

store.dispatch(actions.bugAdded("bug1"));
console.log(store.getState());
