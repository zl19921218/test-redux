/*
 * @Author: 小石头
 * @Date: 2022-09-21 14:21:45
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-22 17:23:42
 * @Description: 
 */

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger';

import reducer from './reducer.js'

const logger = reduxLogger.createLogger();

const store = createStore(reducer, applyMiddleware(thunk.default));

export default store;