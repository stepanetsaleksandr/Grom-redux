import "./index.scss";
import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: 1, name: "Sarah" }));
store.dispatch(addUser({ id: 2, name: "John" }));
store.dispatch(addUser({ id: 3, name: "Jerry" }));
store.dispatch(addUser({ id: 3, name: "Tom" }));

store.dispatch(deleteUser(2));
store.subscribe(() => {
  const state = store.getState();

  console.log(state);
});

console.log(store.getState());
