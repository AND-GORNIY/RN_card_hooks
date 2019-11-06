//@flow
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {reducerInfo} from '../reducers/reducerInfo';
import {reducerProduct} from '../reducers/reducerProduct';
const rootReducer = combineReducers({
  userInfo: reducerInfo,
  productInfo: reducerProduct,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
