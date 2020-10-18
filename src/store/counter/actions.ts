import { ActionTypes } from '../actionTypes';
import { CounterActionTypes } from './types';

// アクションクリエーター
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
