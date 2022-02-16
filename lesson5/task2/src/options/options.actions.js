export const TOGGLE_OPTION = "OPTION/TOGGLE";

export const toggleOption = (optionId) => {
  return {
    type: TOGGLE_OPTION,
    payload: { optionId },
  };
};
