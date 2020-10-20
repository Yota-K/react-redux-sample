import { combineReducers, createStore } from 'redux';
import { countReducer } from './counter/reducer';

// combineReducers・・・reducer同士でstateを共有できる
// Reducerを増やすときは、ここに追加
const rootReducer = combineReducers({
  counter: countReducer
});

// states type・・・stateの型推論？？
// ReturnType<>・・・関数の戻り値をから型を作り出すことができる
export type RootState = ReturnType<typeof rootReducer>;

// store・・・stateを管理する場所
export const store = createStore(rootReducer);
