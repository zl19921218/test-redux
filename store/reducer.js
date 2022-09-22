/*
 * @Author: 小石头
 * @Date: 2022-09-21 14:22:17
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-21 17:24:08
 * @Description: 
 */
import { combineReducers } from 'redux';

import numberReducer from './number/reducer.js';
import useActionsReducer from './useActions/reducer.js';
import ThunkActionReducer from './thunkActions/reducer.js';

export default combineReducers({
    numberReducer,
    useActionsReducer,
    ThunkActionReducer,
});