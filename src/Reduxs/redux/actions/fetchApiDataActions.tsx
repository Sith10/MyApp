import {
  Paragraph,
  ParagraphState,
  ParagraphActionTypes,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from '../types/fetchApiDataType';
import {GET} from '../types';
import axios from 'axios';
import {Dispatch, ActionCreator} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {Value} from 'react-native-reanimated';

// export const fetchPostsWithRedux: ActionCreator<ThunkAction<
//   Promise<any>,
//   ParagraphState,
//   null,
//   ParagraphActionTypes
// >> = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/posts',
//       );
//       console.log(response.data);
//       dispatch({
//         characters: response.data.results,
//         type: 'GET_ALL',
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

//** with fetch */
// export const fetchPostsWithRedux = () => {
//   return (dispatch: Dispatch) => {
//     dispatch(fetchPostsRequest());
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchPostsSuccess(res));
//         return res.products;
//       })
//       .catch((error) => {
//         dispatch(fetchPostsError());
//       });
//   };
// };

//** With axios */

// export const fetchPostsWithRedux = () => {
//   return (dispatch: Dispatch) => {
//     dispatch(fetchPostsRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => {
//         console.log('success');
//         dispatch(fetchPostsSuccess(res.data));
//       })
//       .catch((err) => {
//         console.log('Error: ', err);

//         dispatch(fetchPostsError());
//       });
//   };
// };
//** with axios syncronous */
export const fetchPostsWithRedux = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      console.log('success');
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.log('faile: ', error);
      dispatch(fetchPostsError());
    }
  };
};

/** with fetch */
// export const fetchPostsWithRedux = () => {
//   return (dispatch: Dispatch) => {
//     dispatch(fetchPostsRequest());
//     return fetchPosts().then(([response, json]) => {
//       if (response.status === 200) {
//         dispatch(fetchPostsSuccess(json));
//       } else {
//         dispatch(fetchPostsError());
//       }
//     });
//   };
// };

const fetchPosts = () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  return fetch(URL, {method: GET}).then((response) =>
    Promise.all([response, response.json()]),
  );
};

export const fetchPostsRequest = (): ParagraphActionTypes => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchPostsSuccess = (
  paragraph: Paragraph[],
): ParagraphActionTypes => {
  return {
    type: FETCH_SUCCESS,
    payload: {paragraph},
  };
};

export const fetchPostsError = (): ParagraphActionTypes => {
  return {
    type: FETCH_ERROR,
  };
};
