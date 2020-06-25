export const SET_NAME = 'SET_NAME';
export interface Names {
  name: string;
}

interface SetName {
  type: typeof SET_NAME;
  payload: {name: Names};
}

export type NameActionTypes = SetName;
