// Actionの種類
// {
//   // この部分
//   type: 'アクションの種類を一意に識別できる文字列またはシンボル',
//   payload: 'アクションの実行に必要な任意のデータ',
// }
//
export const ActionTypes = {
  increment: 'INCREMENT', // 'INCREMENT'型
  decrement: 'DECREMENT', // 'DECREMENT'型
  countReset: 'COUNT_RESET', // 'COUNT_RESET'型
} as const;
// const assertionを用いて、プロパティをストリングリテラル型にしておくことで
// Actionの型をストリングリテラル型にでき、Actionに対して型推論が効くようになる。
