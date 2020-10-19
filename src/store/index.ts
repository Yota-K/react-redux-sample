import { combineReducers, createStore } from 'redux';
import { countReducer } from './counter/reducer';

// combineReducers・・・reducer同士でstateを共有できる
// Reducerを増やすときは、ここに追加
const rootReducer = combineReducers({
  counter: countReducer
});

// states type・・・stateの型推論？？
// ReturnType<>・・・推論した戻り値の型を抽出する
export type RootState = ReturnType<typeof rootReducer>;

// store・・・stateを管理する場所
export const store = createStore(rootReducer);
