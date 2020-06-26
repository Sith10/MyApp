import {combineReducers} from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';
import foodReducer from './foodReducer';
import fetchApiDataReducers from './fetchApiDataReducers';

const rootReducer = combineReducers({
  count: countReducer,
  name: nameReducer,
  food: foodReducer,
  fetApi: fetchApiDataReducers,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
