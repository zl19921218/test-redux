/*
 * @Author: 小石头
 * @Date: 2022-09-21 16:53:35
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-22 17:36:38
 * @Description: 
 */

import { createAction } from "redux-actions";

import { SYNC, ASYNC, ADD } from './constants.js';

export const syncFn = createAction(SYNC, () => 'sync');

export const asyncFn = (value) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(addOne(value));
        }, 10000)
    }
};

export const addOne = createAction(ADD, (value = 110) => ({ num: value}));