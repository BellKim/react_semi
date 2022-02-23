import React from 'react';

//    //일반적인 여러개의 비구조화 할당.
// function Hello(props) {
//   return (f
//     <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
//   )
// }


//    //구조화 할당방식
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

//wrapper


export default Hello;