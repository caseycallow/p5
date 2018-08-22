import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import Midi from "./Chopin.json";

const canvasWidth = 1440;
const canvasHeight = 1200;
const multiplier = 6;
const animationSpeed = 10;
let midiArray = [];
let lineNum = 0;

Object.entries(Midi.notesRight).forEach(([key, value]) =>
  midiArray.push(value)
);

function sketch(p) {
  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.strokeWeight(1);
    p.colorMode(p.HSB);
    p.noFill();
    p.noLoop();
    p.background("black");
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);

    midiArray.map(note => {
      const hue = p.floor(note.velocity * 300 ** 1.1);
      return (
        setTimeout(() => {
          p.line(0, 0, note.midi * multiplier, 0);
          p.stroke(`hsb(${hue}, 90%, 100%)`);
          p.rotate(p.TWO_PI / lineNum);
        }, lineNum * animationSpeed),
        lineNum++
      );
    });
  };
}

export default class Chopin extends Component {
  render() {
    return <P5Wrapper sketch={sketch} />;
  }
}
