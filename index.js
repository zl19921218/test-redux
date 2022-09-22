/*
 * @Author: 小石头
 * @Date: 2022-09-21 14:15:42
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-22 17:29:54
 * @Description: 
 */

import store from "./store/index.js";

// import { addOne, reduceOne } from './store/useActions/actions.js'

import { asyncFn, addOne } from './store/thunkActions/actions.js'

// console.log(process.argv.slice(2));

const { dispatch, subscribe } = store;

subscribe(() => {
    console.log(store.getState())
});

dispatch(asyncFn(99));

dispatch(addOne());






