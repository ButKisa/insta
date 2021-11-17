import { GET_NEWS } from "../constants";

export const getNews = payload => {
    return {
      type: GET_NEWS,
      payload: payload,
    };
  };
