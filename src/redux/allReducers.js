import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RocketsReducer from './rockets/rockets';
import MissionsReducer from './Missions/missions';

const rootReducer = combineReducers({
  MissionsReducer,
  RocketsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
