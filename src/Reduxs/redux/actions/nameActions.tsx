import {Names, NameActionTypes, SET_NAME} from '../types/nameType';
export const ISetNameAction = (name: Names): NameActionTypes => {
  return {
    type: SET_NAME,
    payload: {name},
  };
};
