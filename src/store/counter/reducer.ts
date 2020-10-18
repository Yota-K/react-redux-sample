import { ActionTypes } from '../actionTypes';
import { Count, CounterActionTypes } from './types';

// stateの初期値
const initialState: Count = {
  value: 0,
};

// Reducer・・・Actionと現在のStateを受け取って、新しいStateを返す
// →Reduxにおいて、Stateを変更する時に使うやつ
export const countReducer = (state = initialState, action: CounterActionTypes): Count => {
  switch (action.type) {
    case ActionTypes.increment:
      // スプレッド構文を利用した方が、複数要素書き換えられるので楽
      return { ...state, value: state.value + 1};
    case ActionTypes.decrement:
      return { ...state, value: state.value === 0 ? 0 : state.value -1 };
    case ActionTypes.countReset:
      return { ...state, value: 0 };
    default:
      // never型・・・何ものも代入できない型
      // never型を使って漏れをチェックする
      // ※チェック漏れがあると、アクションクリエーターで定義されてる型が入る
      const _: never = action;

      return state;
  }
}
