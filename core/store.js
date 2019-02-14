import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers';

/* eslint-disable-next-line import/prefer-default-export */
export function initializeStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
