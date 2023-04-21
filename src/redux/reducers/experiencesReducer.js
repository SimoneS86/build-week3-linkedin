import { ADD_EXPERIENCES } from "../actions";
import { REMOVE_FROM_EXPERIENCES } from "../actions";

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
      case REMOVE_FROM_EXPERIENCES:
        return {
          ...state,
          content: state.content.filter((_, i) => i !== action.payload)
        };
    default:
      return state;
  }
};

export default experiencesReducer;