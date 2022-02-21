import { getUserData } from "./users.gateway";

export const SHOW_SPINNER = "SPINNER/SHOW";
export const USER_DATA_RECIEVED = "USER/DATA_RECIEVED";

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecieved = (userData) => {
  return {
    type: USER_DATA_RECIEVED,
    payload: { userData },
  };
};

export const fetchUserData = (userName) => {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then((data) => dispatch(userDataRecieved(data)));
  };
};
