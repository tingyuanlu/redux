import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
const store = configureStore();

store.subscribe(() => {
  console.log("Store change");
});

store.dispatch(userAdded({ name: "user1" }));
store.dispatch(userAdded({ name: "user2" }));

store.dispatch(projectAdded({ name: "Porject1" }));
store.dispatch(actions.bugAdded({ discription: "bug1" }));
store.dispatch(actions.bugAdded({ discription: "bug2" }));
store.dispatch(actions.bugAdded({ discription: "bug3" }));
store.dispatch(actions.bugAssignedToUser({ userId: 1, bigId: 1 }));
const x = actions.getUnresolveBugs(store.getState());
const y = actions.getUnresolveBugs(store.getState());

console.log(x === y);
