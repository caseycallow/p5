import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import MeteoriteData from "./Meteorites.json";

let rings = [];
const circleMultiplier = 1;

Object.entries(MeteoriteData).forEach(([key, value]) => rings.push(value.mass));

function sketch(p) {
  p.setup = function() {
    p.createCanvas(1440, 900);
    p.stroke("#50E3C2");
    p.noFill();
    p.background("black");
  };

  p.draw = function() {
    rings.map(ring =>
      p.ellipse(300, 300, ring * circleMultiplier, ring * circleMultiplier)
    );
  };
}

export default class App extends Component {
  render() {
    return <P5Wrapper sketch={sketch} />;
  }
}
