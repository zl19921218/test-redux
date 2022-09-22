/*
 * @Author: 小石头
 * @Date: 2022-09-21 16:53:41
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-21 17:23:19
 * @Description: 
 */

import { handleActions } from "redux-actions";

import { ADD } from "./constants.js";

const initialState = {
    num: 0,
};

export default handleActions({
    [ADD]: (state, action) => ({ ...state, num: state.num + action.payload.num}),
}, initialState);
