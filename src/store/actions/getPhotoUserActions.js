import { GET_PHOTO_USER } from "../constants";


export const getPhotoUser = payload => {
  return {
    type: GET_PHOTO_USER,
    payload: payload,
  };
};
