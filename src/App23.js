//2020-10-15 7.練習題：日期選擇後計算年紀-final
import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import AgeCheck from './components/AgeCheck';

function App23() {
  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <AgeCheck />
        </div>
      </main>
      <MyFooter />
    </>
  );
}

export default App23;
