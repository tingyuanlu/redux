import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";
const store = configureStore();

store.subscribe(() => {
  console.log("Store change");
});
store.dispatch(projectAdded({ name: "Porject1" }));
store.dispatch(actions.bugAdded({ discription: "bug1" }));
store.dispatch(actions.bugAdded({ discription: "bug2" }));
store.dispatch(actions.bugAdded({ discription: "bug3" }));
console.log(store.getState());
