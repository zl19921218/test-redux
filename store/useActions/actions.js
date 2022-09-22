/*
 * @Author: 小石头
 * @Date: 2022-09-21 15:52:16
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-21 16:18:38
 * @Description:
 */

import { createActions, createAction } from "redux-actions";

import { ADD, REDUCE } from "./constants.js";

// export default createActions({
//     [ADD]: () => ({ num: 1 }),
//     [REDUCE]: () => ({ num: 1 })
// });

export const addOne = createAction(ADD, () => ({ num: 1 }))

export const reduceOne = createAction(REDUCE, () => ({ num: 1 }))
