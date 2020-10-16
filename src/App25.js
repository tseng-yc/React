//2020-10-16 待辨事項：拆分與組合
import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MainContent from './components/MainContent';
import TodoApp2 from './components/TodoApp2';

function App25(props) {
  return (
    <>
      <MyNavbar />
      <MainContent>
        <TodoApp2 />
      </MainContent>
      <MyFooter />
    </>
  );
}

export default App25;
