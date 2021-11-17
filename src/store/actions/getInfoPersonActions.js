import { GET_INFO_PERSON } from "../constants";


export const getInfoPerson = payload => {
  return {
    type: GET_INFO_PERSON,
    payload: payload,
  };
};
