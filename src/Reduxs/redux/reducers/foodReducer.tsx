import {
  FoodState,
  FoodActionTypes,
  ADD_FOOD,
  DELETE_FOOD,
  UPDATE_FOOD,
} from '../types/foodType';

const initialState: FoodState = {
  data: [],
};

const foodReducer = (
  state: FoodState = initialState,
  action: FoodActionTypes,
): FoodState => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        data: [...state.data, action.payload.food],
      };
    case UPDATE_FOOD: {
      const data = state.data.map((item) =>
        item.key === action.payload.food.key ? action.payload.food : item,
      );
      return {
        data: data,
      };
    }

    case DELETE_FOOD: {
      const data = state.data.filter(
        (item) => item.key !== action.payload.food.key,
      );
      return {data};
    }

    default:
      return state;
  }
};

export default foodReducer;
