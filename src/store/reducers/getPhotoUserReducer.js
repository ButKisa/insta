import { GET_PHOTO_USER } from "../constants";

export const getPhotoUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_PHOTO_USER:
        return {...state, photo: action.payload.response};
      default:
        return state
    }
} 

const INITIAL_STATE = {
  photo: [],
}


