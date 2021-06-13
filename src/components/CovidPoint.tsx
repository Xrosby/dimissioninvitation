import React from "react";
import { Component } from "react"; // literally anything, don't even have to use it

interface Props {
  src: string;
  message: string;
  color: string;
}
export default function CovidPoint(Props: Props) {
  return (
    <div id="sanitizer-card" className="covid-card" style={{backgroundColor:Props.color, paddingBottom:"2%"}}>
      <img style={{ width: "100px" }} src={Props.src} />
      <div >{Props.message}</div>
    </div>
  );
}
