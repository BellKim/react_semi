import React from 'react';

// function Hello(props) {
//   return (
//     <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
//   )
// }

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}


export default Hello;