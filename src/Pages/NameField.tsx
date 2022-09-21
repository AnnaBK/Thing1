import React, { useState } from 'react';
import { setTextRange } from 'typescript';
export { NameField };

function NameField() {
    const initialList = [
      {
        name: 'Robin',
      },
      {
        name: 'Dennis',
      },
    ];
  const [name, setName] = useState("");
  const [list, setList] = useState(initialList);
  
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  
  const handleSubmit = () => {
    const newList = list.concat({name});
    setList(newList);
    setName('');
  };
  
    return (
    <div>
      <div className="addField" style={{width: "70%", margin: "0 auto", marginTop: "50px"}}>
        <input type="text" value={name} onChange={handleChange} placeholder="Add your person here." style={{width: "250px"}}/>
        <button onClick={handleSubmit} style={{width: "50px", marginLeft: "10px", borderRadius: "5px", background: "#ffffcc"}}>Add</button>
        <ul style={{height: "200px"}}>
          {list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
    );
  }

  export default NameField;
function handleSubmit(e: any) {
  throw new Error('Function not implemented.');
}

function e(e: any) {
  throw new Error('Function not implemented.');
}
