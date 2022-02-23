import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import { sortedtasksListSelector } from "../tasks.selectors";
import { connect } from "react-redux";

const TasksList = ({ tasks }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapState = (state) => {
  return { tasks: sortedtasksListSelector(state) };
};
const connector = connect(mapState);
export default connector(TasksList);
