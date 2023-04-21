import { ADD_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
