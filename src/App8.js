//  2020-10-13 3.美金轉新台幣應用-介面

// 導入其它的模組
import React, { useState } from 'react'

function App8(props) {
  const [twd, setTwd] = useState(0);
  const [usd, setUsd] = useState(0);
  
  return (
    <>
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => setTwd(event.target.value)}
      />
      <br />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(e) => setUsd(e.target.value)}
      />
    </>
  );
}

// 輸出元件(函式)
export default App8