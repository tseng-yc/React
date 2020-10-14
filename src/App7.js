//  2020-10-13 2.子女元件之間互傳資料

// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOne4 from './components/MyButtonOne4'
import MyButtonTwo4 from './components/MyButtonTwo4'

function App7(props) {
  const [text, setText] = useState('');

  return (
    <>
      <h1>MyButtonOne</h1>
      {/* 父母元件利用props傳給子女，呈現文字資料 */}
      <MyButtonOne4 title="我要接資料(One)" text={text} />
      <hr />
      <h1>MyButtonTwo</h1>
      {/* 父母元件利用props傳給子女，準備要接收資料的函式setText */}
      <MyButtonTwo4 title="我要傳資料(Two)" setText={setText} />
    </>
  );
}

// 輸出元件(函式)
export default App7