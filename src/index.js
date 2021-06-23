import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();
var style = {color: "red"};

if(time >= 0 && time < 12)
{
  style.color = "red";
} else if(time >= 12 && time < 6){
  style.color = "green";
} else{
  style.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style= {style}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);