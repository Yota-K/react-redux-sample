import { ActionTypes } from '../actionTypes';
import { CounterActionTypes } from './types';

// Action Creator・・・stateを変更するために必要なアクションを発行する
// StoreのStateをいじるには、これを通さないといけない

export const incrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.increment
  }
}

export const decrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.decrement
  }
}

export const resetAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.countReset
  }
}
