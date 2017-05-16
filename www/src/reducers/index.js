import { combineReducers } from 'redux';
import RatingsReducer from './reducer';


const rootReducer = combineReducers({
  data : RatingsReducer
});

export default rootReducer;
