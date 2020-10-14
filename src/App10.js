//  2020-10-13 4.美金轉新台幣應用-介面-拆分成兩個元件
// 導入其它的模組
import React, { useState } from 'react';
import MoneyInput from './components/MoneyInput';



function App10(props) {
  const [twd, setTwd] = useState(0);
  const [usd, setUsd] = useState(0);

  // 注意，這種數字運算會去掉小數然後四捨五入，所以不夠精準，只作範例用
  const usd2Twd = (usd) => (usd * 28.53).toFixed(2);
  const twd2Usd = twd > 0 ? (twd) => (twd / 28.53).toFixed(2) : 0;

  return (
    <>
      {/* 寫一個子女元件重覆使用 */}
      <MoneyInput
        title="新台幣"
        money={twd}
        setMoney={(value) => {
          setTwd(value);
          setUsd(twd2Usd(value));
        }}
      />
      <br />
      <MoneyInput
        title="美金"
        money={usd}
        setMoney={(value) => {
          setUsd(value);
          setTwd(usd2Twd(value));
        }}
      />

      {/* 新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => {
          //先拿到更動後的值
          const newTwd = event.target.value;
          setTwd(newTwd);
          setUsd(twd2Usd(newTwd));
        }}
      />
      {/* onChange={(event)=>setTwd(event.target.value)} */}
      {/*<br />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(e) => {
          //先拿到更動後的值
          const newUsd = e.target.value;
           // 再設定兩個需要設定的狀態值
          setUsd(newUsd);
          setTwd(usd2Twd(newUsd));
        }}
      /> */}
    </>
  );
}

// 輸出元件(函式)
export default App10