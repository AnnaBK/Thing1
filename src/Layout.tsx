import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import LinkComponent from './Components/LinkComponent';
import './Pages/NameField';
import './Pages/TextField';

function Layout() {

/*enum Pages {
  SetName,
  SetField,
}

const [page, setPage] = useState(Pages.SetName);

const handleClick = () => {
  setPage(Pages.SetName);
};

const handleClickField = () => {
  setPage(Pages.SetField);
};*/

  return (
  <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
    <div className="Greeting" style={{marginBottom: "40px"}}>
      <h2 style={{color: "red", textAlign: "center", verticalAlign: "middle"}}>
        Hello my first page.
      </h2>
    </div>
    <div style={{margin: "0 auto"}}>
    <LinkComponent to="/" name="Name" margin="0 20px 0 0" />
    <LinkComponent to="/text" name="Text" margin="0 20px 0 0" />
    {/* <button onClick={handleClick} style={{display: "inline-block", marginRight: "20px", width: "150px", borderRadius: "5px", background: "#ffffcc"}}>Add name</button>
      <button onClick={handleClickField} style={{display: "inline-block", width: "150px", borderRadius: "5px", background: "#ffffcc"}}>Text field</button> */}
    </div>
    <div>
      {/* {(page === Pages.SetName)? <NameField /> : <TextField />} */}
    </div>
    <Outlet />
</div>
  );
}

export default Layout;

function e(e: any) {
    throw new Error('Function not implemented.');
  }