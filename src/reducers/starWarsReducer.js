import {FETCH_START,FETCH_SUCCESS,FETCH_FAIL} from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
      return {
        ...state,
        fetching:true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching:false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        fetching:false,
      };
    default:
      return state;
  }
};
