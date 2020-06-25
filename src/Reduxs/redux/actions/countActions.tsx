import {CountNumberActionTypes, INCREMENT, DECREMENT} from '../types/countType';

export const IIncrementCountAction = (): CountNumberActionTypes => {
  return {
    type: INCREMENT,
  };
};
export const IDecrementCountAction = (): CountNumberActionTypes => {
  return {
    type: DECREMENT,
  };
};
