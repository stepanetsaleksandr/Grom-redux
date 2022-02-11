const usersReducer = (state = { usersList: [] }, { type, user }) => {
  switch (type) {
    case "USER/ADD": {
      return {
        ...state,
        usersList: state.usersList.concat(user),
      };
    }

    case "USER/DELETE": {
      return {
        ...state,
        usersList: state.usersList.filter((unit) => unit.id !== user.id),
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
