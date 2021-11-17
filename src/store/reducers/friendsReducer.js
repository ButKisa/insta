import { SEARCH_FRIENDS } from "../constants";

export const friendsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SEARCH_FRIENDS:
        return {...state, friends: action.payload.response.items};
      default:
        return state
    }
} 

const INITIAL_STATE = {
  friends: [],
}


