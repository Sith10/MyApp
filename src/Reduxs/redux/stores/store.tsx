import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middlewares: Array<any> = [thunk];

if (__DEV__) {
  console.log('******* Running in development mode ******* ');
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
