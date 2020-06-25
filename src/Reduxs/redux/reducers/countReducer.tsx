import {
  Count,
  CountNumberActionTypes,
  DECREMENT,
  INCREMENT,
} from '../types/countType';

const initialState: Count = {
  count: 0,
};

const countReducer = (
  state: Count = initialState,
  action: CountNumberActionTypes,
): Count => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default countReducer;
