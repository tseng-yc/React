//2020-10-12 8.父母-子女元件資料傳遞範例-1

// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOne1 from './components/MyButtonOne1'
import MyButtonTwo1 from './components/MyButtonTwo1'

function App4(props) {
  return (
    <>
      <h1>0</h1>
      <MyButtonOne1 />
      <MyButtonTwo1 />
    </>
  )
}

// 輸出元件(函式)
export default App4