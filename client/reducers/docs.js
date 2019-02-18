import { GET_README_SUCCESS, GET_README_ERROR } from 'client/constants';

const initialState = {
  isLoaded: false,
  hasError: false,
  data: null,
};

export default function docs(state = initialState, action) {
  switch (action.type) {
    case GET_README_SUCCESS: {
      return {
        ...state,
        isLoaded: true,
        hasError: false,
        data: action.payload,
      };
    }

    case GET_README_ERROR: {
      return {
        ...state,
        isLoaded: false,
        hasError: true,
        data: null,
      };
    }

    default: {
      return state;
    }
  }
}
