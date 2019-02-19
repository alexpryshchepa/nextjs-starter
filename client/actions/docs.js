import 'isomorphic-fetch';
import { GET_README_SUCCESS, GET_README_ERROR } from 'client/constants';

export default function fetchDocs() {
  return async (dispatch) => {
    await fetch('https://api.github.com/repos/alexpryshchepa/nextjs-starter/readme', {
      headers: {
        Accept: 'application/vnd.github.v3.html',
        'User-Agent': 'alexpryshchepa',
      },
    })
      .then(async (response) => {
        if (response.ok) {
          await response.text().then((text) => {
            dispatch({
              type: GET_README_SUCCESS,
              payload: text,
            });
          });
        } else {
          dispatch({
            type: GET_README_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_README_ERROR,
        });
      });
  };
}
