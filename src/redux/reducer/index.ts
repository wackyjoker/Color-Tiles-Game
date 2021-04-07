import {combineReducers} from "redux";
import postReducer from './gameReducer';

export default combineReducers({
    post:postReducer
})

