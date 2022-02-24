import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    
    //파라미터 전달하기 단수
    // <Hello name="react"/>

    //파라미터 전달하기 복수
    //    //두가지의 파라미터를 전달하고자할때
    // <Hello name="이름칸 입력되었습니다." color="red"/>


    //    //defaultProps로 기본설정하기 (설정을 안해도 기본으로 값이 들어가도록 설정한다.)
    //  //props.children(wrapper.js)
    // <>
    //   <Hello name="react" color="red"/>
    //   <Hello color="pink"/>
    //   <Hello />
    // </>


    //      //wrapper 로 사각형 틀 만들기
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>


  );
}

export default App;



