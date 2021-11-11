import { createStore, combineReducers } from 'redux';
import usernameReducer from '../reducer/username.reducer'


const rootReducer = combineReducers({
    username: usernameReducer,
})

const store = createStore(rootReducer);

export default store;