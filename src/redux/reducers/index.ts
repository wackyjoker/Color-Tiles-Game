
import { combineReducers } from 'redux';
import GameReducer from './GameReducer';

 const rootReducers = combineReducers({
    game: GameReducer
});


 export default rootReducers
