import React, { CSSProperties } from "react";
import { Link, To } from "react-router-dom";

interface Props {
    to: To;
    name: string;
    margin: string | undefined;
}

const LinkComponent = (props: Props) => {
    return (
        <Link to={props.to} style={{ display: "inline-block", margin: props.margin, width: "150px", borderRadius: "5px", borderColor: "#264852", background: "#2c8099", textDecoration: "none", textAlign: "center", color: "#FFFFFF" }}>{props.name}</Link>
    )
}

export default LinkComponent;
  
 /* function e(e: any) {
    throw new Error('Function not implemented.');
  }*/