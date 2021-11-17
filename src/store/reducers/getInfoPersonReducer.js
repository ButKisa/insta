import { GET_INFO_PERSON } from "../constants";

export const getInfoPersonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_INFO_PERSON:
        return {...state, person: action.payload.response};
      default:
        return state
    }
} 

const INITIAL_STATE = {
  person: [],
}


