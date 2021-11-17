import { GET_NEWS } from "../constants"

export const newsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_NEWS:
        return {
          ...state,news: state.news + action.payload
        }
      default:
        return state
    }
} 

const INITIAL_STATE = {
  news: [1,2,3],
}
