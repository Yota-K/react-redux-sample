import React from 'react';
import { Button } from 'semantic-ui-react';

// Reduxで使えるHooks
import { useSelector, useDispatch } from 'react-redux';

// states type・・・stateの型推論？？
import { RootState } from '../store/index';
// Action Creator
import { incrementAction, decrementAction,  resetAction } from '../store/counter/actions';

export const Counter: React.FC = () => {
  // useSelector・・・storeからstateを取得することができるReduxのHooks
  // storeからstateを絞り込むようなイメージ
  const currentCount = useSelector((state: RootState) => state.counter);

  // useDispatch・・・Storeに存在するstateを変更するために必要なActionを発行するために必要なHooks
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());

  return (
    <>
      <div>{ currentCount.value }</div>
      <Button primary onClick={handleIncrement}>+</Button>
      <Button secondary onClick={handleDecrement}>-</Button>
      <Button onClick={handleReset}>リセット</Button>
    </>
  );
};
