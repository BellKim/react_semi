import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  // 조건에 따른 렌더링을 위한 상태값 변경 
  return (
    <Wrapper>
        {/* isSpecial=true or false :::: default:true 
        isSpecial 만 넣어주면 true가 입력된다. */}
      <Hello name="react" color="red" isSpecial={true}/>  
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;