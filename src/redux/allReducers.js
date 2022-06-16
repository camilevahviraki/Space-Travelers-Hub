import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RocketsReducer from './rockets/rockets';
<<<<<<< HEAD

const rootReducer = combineReducers({
=======
import MissionsReducer from './Missions/missions';

const rootReducer = combineReducers({
  MissionsReducer,
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75
  RocketsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
