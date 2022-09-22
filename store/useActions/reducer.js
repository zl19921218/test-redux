/*
 * @Author: 小石头
 * @Date: 2022-09-21 15:52:25
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-21 16:20:52
 * @Description: 
 */


import { handleActions } from "redux-actions";

import { ADD, REDUCE } from "./constants.js";

const initialState = {
    num: 10
}

export default handleActions({
    [ADD]: (state, action) => ({ ...state, num: state.num + action.payload.num}),
    [REDUCE]: (state, action) => ({ ...state, num: state.num - action.payload.num})
}, initialState)