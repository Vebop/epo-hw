import type { Ceramic } from '../types/ceramics';
// review and update the actual data later
let plastic: Ceramic = {
  id: "plastic",
  stageName: "Plastic",
  stageOrder: 1,
  description: "",
  hydration: 20,
  duration: 5,
  phase: "greenware",
  temperature: 1000,
  shrinkage: 0,
  blurb: ""
};

let wedging: Ceramic = {
  id: "wedging",
  stageName: "Wedging",
  stageOrder: 2,
  description: "",
  hydration: 20,
  duration: 5,
  phase: "greenware",
  temperature: 1000,
  shrinkage: 0,
  blurb: ""
};

let throwing: Ceramic = {
    id: "throwing",
    stageName: "Throwing",
    stageOrder: 3,
    description: "",
    hydration: 20,
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let leatherhard: Ceramic = {
    id: "leatherhard",
    stageName: "Leatherhard",
    stageOrder: 4,
    description: "",
    hydration: 20,
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let drying: Ceramic = {
    id: "drying",
    stageName: "Drying",
    stageOrder: 5,
    description: "",
    hydration: 20,
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let bisque: Ceramic = {
    id: "bisque",
    stageName: "Bisque",
    stageOrder: 6,
    description: "",
    hydration: 20,
    duration: 5,
    phase: "bisque",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let glaze: Ceramic = {
    id: "glaze",
    stageName: "Glaze",
    stageOrder: 7,
    description: "",
    hydration: 20,
    duration: 5,
    phase: "glaze",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let firing: Ceramic = {
    id: "firing",
    stageName: "Firing",
    stageOrder: 8,
    description: "",
    hydration: 20,
    duration: 5,
    phase: "firing",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

export const phases: Ceramic[] = [
  plastic,
  wedging,
  throwing,
  leatherhard,
  drying,
  bisque,
  glaze,
  firing
];