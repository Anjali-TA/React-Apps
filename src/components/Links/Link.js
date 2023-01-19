import React from "react";
import Card from "../UI/Card";
import classes from "./Link.module.css";

const Link = (props) => {
  return (
    <Card className={classes.link}>
      <li>
        <h3>{props.original_link}</h3>
        <p>{props.short_link}</p>
      </li>
    </Card>
  );
};

export default Link;
