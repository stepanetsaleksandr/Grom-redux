import React from "react";
import User from "./User";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import * as usersAction from "./users.actions";
import { userListSelector, currentPageListSelector } from "./users.selectors";

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
      />
      <ul className="users">
        {users.slice(currentPage * 3, currentPage * 3 + 3).map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: userListSelector(state),
    currentPage: currentPageListSelector(state),
  };
};

const mapDispatch = {
  goNext: usersAction.goNextPage,
  goPrev: usersAction.goPrevPage,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;
