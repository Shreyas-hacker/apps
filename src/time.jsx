import React from "react";


function Heading(){
    const date = new Date();
    const time = date.getHours();
    var greeting = ""
    var style = {color: "red"};

    if(time >= 0 && time < 12)
    {
        style.color = "red";
        greeting = "Good Morning!";
    } else if(time >= 12 && time < 18){
        style.color = "green";
        greeting = "Good Afternoon!";
    } else{
        style.color = "blue";
        greeting = "Good Evening!";
    }
    return (<h1 className="heading" style= {style}>{greeting}</h1>)
};

export default Heading;