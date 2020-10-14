//  2020-10-13 3.美金轉新台幣應用-單元件版本

// 導入其它的模組
import React, { useState } from 'react'

function App9(props) {
  const [twd, setTwd] = useState(0);
  const [usd, setUsd] = useState(0);
//toFixed會四捨五入
  const usd2Twd = (usd) => (usd * 28.53).toFixed(2); 
  const twd2Usd = (twd > 0 ? (twd) => (twd / 28.53).toFixed(2) : 0); 
  //twd如果大於0去做算是，不然就顯示0
  //除法要小心，會有0被除的問題
  
  return (
    <>
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => {
        //先拿到更動後的值
        const newTwd = event.target.value
        setTwd(newTwd) 
        setUsd(twd2Usd(newTwd))}}
      />
      {/* onChange={(event)=>setTwd(event.target.value)} */}
      <br />
      美金：
      <input type="text" value={usd} 
        onChange={(e) => {
            //先拿到更動後的值
            const newUsd = e.target.value
            setUsd(newUsd) 
            setTwd(usd2Twd(newUsd))}}
           />
    </>
  );
}

// 輸出元件(函式)
export default App9