import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import MeteoriteData from "./Meteorites.json";

let rings = [];
const circleMultiplier = 1;

Object.entries(MeteoriteData).forEach(([key, value]) => rings.push(value.mass));

function sketch(p) {
  p.setup = function() {
    p.createCanvas(1440 * 2, 900 * 2);
    p.strokeWeight(2);
    p.colorMode(p.RGB, 900);
    p.noFill();
    p.noLoop();
    p.filter(p.BLUR, 3);
    p.background("black");
  };

  p.draw = function() {
    let strokeColor = 0;
    rings.map(ring => {
      return (
        p.ellipse(300, 300, ring * circleMultiplier, ring * circleMultiplier),
        p.stroke(strokeColor, strokeColor, 900),
        strokeColor++
      );
    });
  };
}

export default class App extends Component {
  render() {
    return <P5Wrapper sketch={sketch} />;
  }
}
