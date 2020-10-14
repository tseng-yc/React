import React, { useState } from 'react';

function twd2Usd(props) {
    const twd2Usd = twd > 0 ? (twd) => (twd / 28.53).toFixed(2) : 0;
  return (
    <input
        type="text"
        value={twd}
        onChange={(event) => {
          const newTwd = event.target.value;
          props.setTwd(newTwd);
          props.setUsd(twd2Usd(newTwd));
        }}
    />
    
  );
}
function MyButtonTwo4(props) {
  const innerValue = 'Two中的內部資料';
  return (
    <>
      {/* 子女元件利用父母元件傳給他的setText，進行傳遞自己的資料 */}
      <button onClick={() => props.setText(innerValue)}>{props.title}</button>
    </>
  );
}
export default twd2Usd;