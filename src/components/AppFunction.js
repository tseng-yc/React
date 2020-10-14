//如果是開發者自訂的元件，檔名開頭第一個字一定要是英文大寫！！
//一個.js檔案，建議寫一個元件就好

//專案裡面要使用其他的函式庫都要用import（導入其他的模組），用了jsx語法一定要導入這個
import React, { useState } from 'react';
/* from後面其實是要加路徑的，但現在在同個資料夾
   {}表示部分導入，引入一個狀態（hooke勾子）
   ex.{useEffect,useContext}
*/

/* 最簡單元件
   function App() {
   return <></>
 }*/

function AppFunction(props) {
  console.log(props);
  // 呼叫useState勾子，設定初始化值為0
  // 回傳一組getter(獲取值)和setter(設定值)陣列
  const [total, setTotal] = useState(props.initValue); //呼叫這個函式（useState鉤子），設定這個值，函式最後會回傳一個陣列（解構賦值）。設定初始化為50，回傳一組getter（獲取值）跟setter（設定值）

  // return 值即元件的 render 方法，只能有一個根元素進行render
  // 多個元件需要用<>...</>(React.Fragment)包住
  //函式型裡面的回傳值就是他渲染方法
  //JSX語法回傳只能有一個跟元素
  return (
    //div包住是以前的作法
    //Fragment是片段的意思

    <React.Fragment>
      {/* JSX語法中加註解 */}
      <h1>{props.title}</h1>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      {/*setTotal其實是一個函式*/}
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </React.Fragment>
  );
}
// 函式行元件(上面的部分)vs類別行元件

/*例外狀況：
 return (
      <h1>{total}</h1>
  );
  只有一行的話就不用夾，很多行就前夾後夾。
*/

//輸出元件（函式）
export default AppFunction;

/*
有些人export default App; 不會放在最後一行，回移到上面函式的前面，但箭頭函式只能用export不能用export default！！但export跟export default這兩個意思不一樣

export default function App() {
  const [total, setTotal] = useState(50);
  return (
    <React.Fragment>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </React.Fragment>
  );
}


export const App = () => {
  const [total, setTotal] = useState(50);
  return (
    <React.Fragment>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </React.Fragment>
  );
}
*/

//js表達式(expression) ->  要求值(Evaluation)
//Statement陳述（語句）
