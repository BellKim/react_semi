import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>

      {/* true/false 의 상태변화 변환. */}
      { isSpecial ? <b>*</b> : null }   

      {/* 단축평가 논리법, TRUE면 출력, false면 미출력 */}
      { isSpecial && <b>*</b>}  


      [name출력 : {name}]
    </div>
  );
}


Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;