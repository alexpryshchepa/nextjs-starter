import { GET_README_SUCCESS, GET_README_ERROR } from '../constants';

export default function fetchDocs() {
  return dispatch => new Promise(((resolve, reject) => {
    fetch('https://api.github.com/repos/alexpryshchepa/nextjs-starter/readme', {
      headers: {
        Accept: 'application/vnd.github.v3.html',
      },
    })
      .then((response) => {
        if (response.ok) {
          response.text().then((text) => {
            dispatch({
              type: GET_README_SUCCESS,
              payload: text,
            });

            resolve();
          });
        } else {
          dispatch({
            type: GET_README_ERROR,
          });

          reject();
        }
      })
      .catch(() => {
        dispatch({
          type: GET_README_ERROR,
        });

        reject();
      });
  }));
}
