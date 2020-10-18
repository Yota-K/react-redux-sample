import { Action } from 'redux';
import { ActionTypes } from '../actionTypes';

// stateの型
export interface Count {
  value: number;
}

// アクションクリエーターの型
// reduxのAction型を継承してる

// string型ではなく'INCREMENT'型になる？？
interface IncrementAction extends Action {
  type: typeof ActionTypes.increment;
}

interface DecrementAction extends Action {
  type: typeof ActionTypes.decrement;
}

interface CounterReset extends Action {
  type: typeof ActionTypes.countReset;
}

// アクションクリエーターの戻り値の型
// union型・・・いずれかの型
export type CounterActionTypes = IncrementAction | DecrementAction | CounterReset;
