//2020-10-20  React-Redux綁定用最上層元件/使用actionCreator進行全綁定
import React from 'react';
import { connect } from 'react-redux';
// 改用動作類型的常數
import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes';
// 導入actions/index.js中所有的action creators 成一個物件
import * as actionCreators from '../actions/index';

function Counter29(props) {
  console.log(actionCreators);
  console.log('props', props);
  //const [total, setTotal] = useState(0)

  //觀察props裡的得到的store對應和方法
  // console.los(props);
  return (
    <>
      <h1>{props.total}</h1>
      {/* <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          props.dispatch({ type: ADD_VALUE, value: 1 });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          props.dispatch({ type: MINUS_VALUE, value: 1 });
        }}
      >
        -1
      </button> */}

      {/* 注意：執行綁定的動作建立器時，Redux會協助自動dispatch */}
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.minusValue(1)}>-1</button>
    </>
  );
}

// 將redux中的store的state(狀態)
// 對應到這個元件中的props中，名稱為total
// 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
// const mapStateToProps = (store) => {
const mapStateToProps = (store, ownProps) => {
  console.log(ownProps);
  return { total: store.counter }; //擴充狀態值
};

// const mapDispatchToProps = undefined;
// const mapDispatchToProps = null;

// 高階元件的樣式，必要的
// export default connect(mapStateToProps, mapDispatchToProps)(Counter29);
export default connect(mapStateToProps, actionCreators)(Counter29);
//mapStateToProps的state是redux的state,props是counter元件的屬性
//mapDispatchToProps：把storedispach的方法掛到props。他可以自動得到
