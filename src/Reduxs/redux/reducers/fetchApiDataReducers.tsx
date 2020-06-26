import {
  ParagraphState,
  ParagraphActionTypes,
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_REQUEST,
} from '../types/fetchApiDataType';

const initialState: ParagraphState = {
  isError: false,
  isLoading: false,
  data: [],
};

const fetchApiDataReducers = (
  state: ParagraphState = initialState,
  action: ParagraphActionTypes,
): ParagraphState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      //console.log(action.payload.paragraph);
      return {
        ...state,
        data: action.payload.paragraph,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default fetchApiDataReducers;
