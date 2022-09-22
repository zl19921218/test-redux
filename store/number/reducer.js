/*
 * @Author: 小石头
 * @Date: 2022-09-21 14:50:56
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-21 16:22:08
 * @Description:
 */

import { ADD, REDUCE } from "./constants.js";

const initialState = {
    num: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, num: state.num + action.num };
        case REDUCE:
            return { ...state, num: state.num - action.num };
        default:
            return { ...state };
    }
};
