import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import Midi from "./Zeppelin.json";

const canvasWidth = 1440;
const canvasHeight = 1200;
const multiplier = 6;
let midiArray = [];
let xPos = 0;

Object.entries(Midi.notesVocals).forEach(([key, value]) =>
  midiArray.push(value)
);

function sketch(p) {
  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.strokeWeight(1.3);
    p.colorMode(p.HSB);
    p.noFill();
    p.noLoop();
    p.background("black");
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);

    midiArray.map(note => {
      const hue = p.floor(note.velocity * 200 ** 1.1);
      return (
        p.line(0, 0, note.midi * multiplier, 0),
        p.stroke(`hsb(${hue}, 100%, 100%)`),
        p.rotate(p.TWO_PI / xPos),
        xPos++
      );
    });
  };
}

export default class Zeppelin extends Component {
  render() {
    return <P5Wrapper sketch={sketch} />;
  }
}
