import {combineReducers} from "redux";
import {AuthReducer} from './AuthReducer';
import {ServiceReducer} from './ServiceReducer';

const RootReducer=combineReducers({
    AuthReducer,
    ServiceReducer,
})

export default RootReducer;
