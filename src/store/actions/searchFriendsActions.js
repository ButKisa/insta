import { SEARCH_FRIENDS } from "../constants";


export const searchFriends = payload => {
  return {
    type: SEARCH_FRIENDS,
    payload: payload,
  };
};
