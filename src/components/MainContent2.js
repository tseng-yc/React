import React from 'react';

function MainContent2(props) {
  return (
    <>
      <main className="flex-shrink-0">
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}

export default MainContent2;
