/*
 * @Author: 小石头
 * @Date: 2022-09-21 14:51:02
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-21 15:35:50
 * @Description: 
 */

import { ADD, REDUCE } from './constants.js';

export const addOne = () => {
    return {
        type: ADD,
        num: 1,
    }
}

export const reduceOne = () => {
    return {
        type: REDUCE,
        num: 1,
    }
}

