import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolveBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
const store = configureStore();

store.subscribe(() => {
  console.log("Store change");
});

store.dispatch(userAdded({ name: "user1" }));
store.dispatch(userAdded({ name: "user2" }));

store.dispatch(projectAdded({ name: "Porject1" }));
store.dispatch(bugAdded({ discription: "bug1" }));
store.dispatch(bugAdded({ discription: "bug2" }));
store.dispatch(bugAdded({ discription: "bug3" }));
store.dispatch(bugAssignedToUser({ userId: 1, bugId: 1 }));
store.dispatch(bugResolved({ id: 1 }));
const x = getUnresolveBugs(store.getState());
const y = getUnresolveBugs(store.getState());

console.log(x === y);
const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
