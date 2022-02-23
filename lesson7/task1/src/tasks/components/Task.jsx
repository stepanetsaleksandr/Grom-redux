import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as tasksAction from "../tasks.actions";
import { connect } from "react-redux";

const Task = ({ id, text, done, updateTask, deleteTask }) => {
  return (
    <li className={classNames("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => updateTask(id, done)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => deleteTask(id)}
      ></button>
    </li>
  );
};
Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
const mapDispatch = {
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
};
const connector = connect(null, mapDispatch);
export default connector(Task);
