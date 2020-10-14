//2020-10-14 2.生命周期方法-函式型元件 + 3.生命周期方法-componentWillUnmount
// 導入其它的模組
import React, { useState,useEffect } from 'react';

function AppFunctionLife(props) {

  const [total, setTotal] = useState(0)

  //componentDidMount
  useEffect(()=>{
    console.log('component did mount')
    return()=>{
      //componentWillUnmount
      console.log('component will unmount')
    }
  },[]) //[]放的是相依性，跟你副作用相關的
//什麼是相依性？？

  //componentDidUpdate for total
  useEffect(()=>{
    console.log(total);
  },[total])
  // 只有在total產生副作用的時候（只要有影到的變數）就會呼叫

 return (
   <>
     {(function () {
       console.log('render');
     })()}
     <button onClick={() => setTotal(2)}>Change state</button>
   </>
 );
}

// 輸出元件(函式)
export default AppFunctionLife;
