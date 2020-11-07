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

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
