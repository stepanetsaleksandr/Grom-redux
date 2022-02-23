import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import * as tasksAction from "../tasks.actions";

const CreateTaskInput = ({ createTask }) => {
  const [value, setValue] = useState("");

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn create-task__btn"
        onClick={() => {
          createTask(value);
          setValue("");
        }}
      >
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  createTask: tasksAction.createTask,
};
const connector = connect(null, mapDispatch);
export default connector(CreateTaskInput);
