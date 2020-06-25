import {Names, SET_NAME, NameActionTypes} from '../types/nameType';

const initialState: Names = {
  name: '',
};

const NameReducer = (
  state: Names = initialState,
  action: NameActionTypes,
): Names => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name.name,
      };

    default:
      return state;
  }
};

export default NameReducer;
