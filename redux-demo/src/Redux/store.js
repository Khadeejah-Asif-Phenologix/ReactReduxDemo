import {createStore} from 'redux';
import cakeReducer from './Cake/CakeReducer.js'


const store = createStore(cakeReducer);

export default store;