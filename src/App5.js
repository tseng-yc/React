//2020-10-12 8.父母-子女元件資料傳遞範例-2

// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOne2 from './components/MyButtonOne2'
import MyButtonTwo2 from './components/MyButtonTwo2'

function App5(props) {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <h1>0</h1> */}
      {/* 一般情況下是可以用oncicke但這裡怕搞混 */}
      <MyButtonOne2 title="復活吧~" clickMethod={() => setShow(true)} />
      {show ? (
        <MyButtonTwo2 title="我不要活了" clickMethod={() => setShow(false)} />
      ) : (
        ''
      )}
    </>
  )
}

// 輸出元件(函式)
export default App5