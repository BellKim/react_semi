import React from 'react';
import Hello from './Hello';
import './App.css';

/*
  css, style, 주석  적용시
*/
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
    {/* 주석은 화면에 보이지 않습니다 */}
    /* 중괄호로 감싸지 않으면 화면에 보입니다 */

    혹은 슬레쉬 2개로 쓰기도 합니다.
    // 혹은 슬레쉬 2개로 쓰기도 합니다. 단 테그 내부에서 작성할수있습니다. 
    <Hello //이런식으로 주석을 할수 있습니다. 
    />

      <Hello />
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;