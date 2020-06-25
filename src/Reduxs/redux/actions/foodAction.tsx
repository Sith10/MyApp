import {
  FoodActionTypes,
  Food,
  ADD_FOOD,
  DELETE_FOOD,
  UPDATE_FOOD,
} from '../types/foodType';

export const addFood = (food: Food): FoodActionTypes => {
  return {
    type: ADD_FOOD,
    payload: {food},
  };
};
export const deleteFood = (food: Food): FoodActionTypes => {
  return {
    type: DELETE_FOOD,
    payload: {food},
  };
};

export const updateFood = (food: Food): FoodActionTypes => {
  return {
    type: UPDATE_FOOD,
    payload: {food},
  };
};
