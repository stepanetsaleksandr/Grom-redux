import { createSelector } from "reselect";
export const optionsListSelectors = (state) => {
  return state.options.optionsList;
};

export const selectedIdsListSelectors = (state) => {
  return state.options.selected;
};
export const selectedOptionsSelectors = createSelector(
  [optionsListSelectors, selectedIdsListSelectors],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter((option) => selectedIds.includes(option.id))
);
export const availableOptionsSelectors = createSelector(
  [optionsListSelectors, selectedIdsListSelectors],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter((option) => !selectedIds.includes(option.id))
);
