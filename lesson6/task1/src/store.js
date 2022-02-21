import { createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "./counter.reducer";

//middleware
const logger = (state) => (next) => (action) => {
  console.group(action.type); // нрупирование вывода в консоль
  console.info("dispatching", action);
  let result = next(action); //прокидываем экшн дальше
  console.log("next state", store.getState()); // обновленный стейт в сторе
  console.groupEnd(); // конец группы вывода в консоль
  return result;
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(logger))
);
export default store;
