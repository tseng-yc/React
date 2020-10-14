import React, { useState } from 'react';

function MoneyInput(props) {
  return (
    <>
      {props.title}：
      <input
        type="text"
        value={props.money}
        onChange={(e) => {
          // 轉成數字進入state中
          props.setMoney(+e.target.value);
        }}
      />
    </>
  );
}

export default MoneyInput;

// import React, { useState } from 'react';

// function MoneyInput(props) {
//     const twd2Usd = twd > 0 ? (twd) => (twd / 28.53).toFixed(2) : 0;
//   return (
//     <input
//       type="text"
//       value={props.twd}
//       onChange={(event) => {
//         const newTwd = event.target.value;
//         props.setTwd(newTwd);
//         props.setUsd(twd2Usd(newTwd));
//       }}
//     />
//   );
// }

// export default twd2Usd;