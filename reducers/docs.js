import { GET_README_SUCCESS, GET_README_ERROR } from '../constants';

const initialState = {
  loaded: false,
  error: false,
  data: null,
};

export default function docs(state = initialState, action) {
  switch (action.type) {
    case GET_README_SUCCESS: {
      return {
        ...state,
        loaded: true,
        error: false,
        data: action.payload,
      };
    }

    case GET_README_ERROR: {
      return {
        ...state,
        loaded: false,
        error: true,
        data: null,
      };
    }

    default: {
      return state;
    }
  }
}
