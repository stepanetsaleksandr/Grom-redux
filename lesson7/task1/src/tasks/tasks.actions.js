import { tasksListSelector } from "./tasks.selectors";
import * as tasksGateway from "./tasksGateway";

export const TASKS_LIST_RECIEVED = "TASKS_LIST_RECIEVED";

export const tasksListRecieved = (tasksList) => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: { tasksList },
  };
  return action;
};

export const getTasksList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway
      .fetchTasksList()
      .then((tasksList) => dispatch(tasksListRecieved(tasksList)));
  };
  return thunkAction;
};
export const updateTask = (taskId, done) => {
  const thunkAction = function (dispatch, getState) {
    const updatedTask = { done: !done };
    tasksGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};
export const createTask = (text) => {
  const newTask = { text, done: false };
  const thunkAction = function (dispatch) {
    tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const deleteTask = (id) => {
  const thunkAction = function (dispatch) {
    tasksGateway.deleteTask(id).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};
