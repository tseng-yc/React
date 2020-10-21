//2020-10-21  Redux-部份綁定action-creator
import React from 'react';
import { connect } from 'react-redux';
// 改用動作類型的常數
// import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes';
// 導入actions/index.js中，這個元件只需要一部份的action creators
import { addValue, minusValue } from '../actions/index';

function Counter30(props) {
  console.log('props', props);

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

      {/* 注意：執行綁定的動作建立器時，Redux會協助自動dispatch */}
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.minusValue(1)}>-1</button>
    </>
  );
}

const mapStateToProps = (store) => {
  return { total: store.counter };
};

// 原本的mapDispatchToProps
// const mapDispatchToProps = (dispatch) =>{
//   return { addValue, minusValue }
// }

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue }`是個物件值
export default connect(mapStateToProps, { addValue, minusValue })(Counter30);
