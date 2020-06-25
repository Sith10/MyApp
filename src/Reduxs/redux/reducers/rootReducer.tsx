import {combineReducers} from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
  count: countReducer,
  name: nameReducer,
  food: foodReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
