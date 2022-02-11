export const addUser = ({ id, name }) => {
  return {
    type: "USER/ADD",
    user: {
      id,
      name,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: "USER/DELETE",
    user: {
      id,
    },
  };
};
