//2020-10-15 8.代辦事項
import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import TodoApp from './components/TodoApp';

function App24(props) {
  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <TodoApp />
        </div>
      </main>
      <MyFooter />
    </>
  );
}

export default App24;
