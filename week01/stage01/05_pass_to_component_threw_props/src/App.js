import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    
    // <Hello name="colorReact" color="red"/>


    //  //props.children(wrapper.js)
    // <>
    //   <Hello name="react" color="red"/>
    //   <Hello color="pink"/>
    // </>

    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>


  );
}

export default App;



