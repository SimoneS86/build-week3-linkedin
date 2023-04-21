import { ADD_POSTS } from "../actions";

const initialState = {
  content: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;