// 導入其它的模組
import React, { useState } from 'react';
// import AppClassLife from './components/AppClassLife';
import AppFunctionLife from './components/AppFunctionLife';

//2020-10-14 3.生命周期方法-componentWillUnmount
function App14(props) {
  const [live, setLive] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setLive(false);
        }}
      >
        再見
      </button>
      <button
        onClick={() => {
          setLive(true);
        }}
      >
        復活
      </button>
      <hr />
      {live && <AppFunctionLife />}
    </>
  );
}

// 輸出元件(函式)
export default App14;
