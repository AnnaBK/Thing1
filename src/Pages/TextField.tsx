import React, { useState } from 'react';
import { setTextRange } from 'typescript';
export {};

function TextField() {
  
  const [text, setText] = useState("");
  
    return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <textarea className="textField" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your text here." style={{width: "70%", height: "100px", margin: "0 auto", marginTop: "50px"}}/>
      <p style={{width: "70%", height: "100px", margin: "0 auto", marginTop: "50px"}}>{text}</p>
   </div>
    );
  }
  
  export default TextField;
  
  function e(e: any) {
    throw new Error('Function not implemented.');
  }
  