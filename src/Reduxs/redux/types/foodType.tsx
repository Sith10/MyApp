export const ADD_FOOD = 'ADD_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';
export const UPDATE_FOOD = 'UPDATE_FOOD';

export interface Food {
  name: string;
  key: number;
}

export interface FoodState {
  data: Food[];
}

interface AddFood {
  type: typeof ADD_FOOD;
  payload: {food: Food};
}

interface DeleteFood {
  type: typeof DELETE_FOOD;
  payload: {food: Food};
}

interface UpdateFood {
  type: typeof UPDATE_FOOD;
  payload: {food: Food};
}

export type FoodActionTypes = AddFood | DeleteFood | UpdateFood;
