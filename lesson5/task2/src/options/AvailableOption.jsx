import React from "react";
import { connect } from "react-redux";
import { availableOptionsSelectors } from "./options.selectors";
import Options from "./Options";
import { toggleOption } from "./options.actions";

const mapState = (state) => {
  return { options: availableOptionsSelectors(state) };
};
const mapDispatch = {
  moveOptions: toggleOption,
};
const connector = connect(mapState, mapDispatch);

export default connector(Options);
