import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CreateTaskInput from "./CreateTaskInput";
import { connect } from "react-redux";
import * as tasksAction from "../tasks.actions";

import TasksList from "./TasksList";

const TodoList = ({ getTasksList, createTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList />
      </main>
    </>
  );
};

TodoList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
};
const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
};

const connector = connect(null, mapDispatch);
export default connector(TodoList);
