import { ADD_EXPERIENCES } from "../actions";

const initialState = {
  content: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default experiencesReducer;
