//2020-10-21  Redux-部份綁定action-creator
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// 改用動作類型的常數
// import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes';
// 導入actions/index.js中，這個元件只需要一部份的action creators
import {
  addValue,
  minusValue,
  addValueAsync,
  initValueAsync,
} from '../actions/index';

function Counter30(props) {
  console.log('props', props);
  const [dataLoading, setDataLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    props.initValueAsync();

    setTimeout(() => setDataLoading(false), 2000);
  }, []);

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const display = (
    <>
      <h1>{props.total}</h1>
      {/* 注意：執行綁定的動作建立器時，Redux會協助自動dispatch */}
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.addValueAsync(1)}>
        +1(送到json-server)
      </button>
      <button onClick={() => props.minusValue(1)}>-1</button>
    </>
  );

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display;
}

const mapStateToProps = (store) => {
  return { total: store.counter };
};

//   return (
//     <>
//       <h1>{props.total}</h1>
//       {/* <button
//         onClick={() => {
//           // 改用dispatch發送動作，改變redux裡的store中記錄的state值
//           props.dispatch({ type: ADD_VALUE, value: 1 });
//         }}
//       >
//         +1
//       </button>

//       {/* 注意：執行綁定的動作建立器時，Redux會協助自動dispatch */}
//       <button onClick={() => props.addValue(1)}>+1</button>
//       <button onClick={() => props.addValueAsync(1)}>+1(兩秒後)</button>
//       <button onClick={() => props.minusValue(1)}>-1</button>
//     </>
//   );
// }

// 原本的mapDispatchToProps
// const mapDispatchToProps = (dispatch) =>{
//   return { addValue, minusValue }
// }

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue }`是個物件值
export default connect(mapStateToProps, {
  addValue,
  minusValue,
  addValueAsync,
  initValueAsync,
})(Counter30);
