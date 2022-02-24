import React from 'react';

//    //일반적인 여러개의 "구조화 할당".
// function Hello(props) {
//   return (
//     <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
//   )
// }


//    //"비구조화" 할당방식
//    //두가지 파라미터를 전달하고자 할때
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}


//기본값 설정
Hello.defaultProps = {
  name: '이름없음',
  color: 'yellow'
}

export default Hello;