import type { CeramicType } from '../types/ceramics';
// review and update the actual data later
let plastic: CeramicType = {
  id: "plastic",
  stageName: "Plastic",
  stageOrder: 1,
  description: "Fresh clay ready to be used.",
  hydration: 22, //17-23%
  duration: 5,
  phase: "greenware",
  temperature: 1000,
  shrinkage: 0,
  blurb: "Fresh clay from the bag, sitting on your shelf. You can see the condensation on the inside of the bag, and press your thumb to make an imprint on its rectangular surface.",
};

let wedging: CeramicType = {
  id: "wedging",
  stageName: "Wedging",
  description: "Preparing the clay for throwing or handbuilding.",
  stageOrder: 2,
  hydration: 20, //17-23%
  duration: 5,
  phase: "greenware",
  temperature: 1000,
  shrinkage: 0,
  blurb: "Shaping your fresh clay into a shape to throw. If handbuilding, you can skip this stage. If you are using clay you have previously worked with this step can help wake up the clay and make the texture and moisture level more uniform again, removing impurities.",
};

let throwing: CeramicType = {
    id: "throwing",
    stageName: "Throwing",
    stageOrder: 3,
    description: "Forming the clay on a potter's wheel.",
    hydration: 21, //20-22%
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let handbuilding: CeramicType = {
    id: "handbuilding",
    stageName: "Handbuilding",
    stageOrder: 4,
    description: "Creating and joining slabs, coils, to form a piece by hand.",
    hydration: 19, //18-20%
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let leatherhard: CeramicType = {
    id: "leatherhard",
    stageName: "Leatherhard",
    stageOrder: 5,
    description: "Clay that is partially dried and still somewhat pliable.",
    hydration: 14, //12-15%
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let drying: CeramicType = {
    id: "drying",
    stageName: "Drying",
    stageOrder: 6,
    description: "Slowly dry the form to avoid structural failures.",
    hydration: 5,
    duration: 5,
    phase: "greenware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let bisque: CeramicType = {
    id: "bisque",
    stageName: "Bisque",
    stageOrder: 7,
    description: "First firing to convert greenware to bisque.",
    hydration: 0,
    duration: 5,
    phase: "bisqueware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let glaze: CeramicType = {
    id: "glaze",
    stageName: "Glaze",
    stageOrder: 8,
    description: "Apply decoration or glaze to the bisque fired piece.",
    hydration: 3, //2-4%
    duration: 5,
    phase: "bisqueware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

let firing: CeramicType = {
    id: "firing",
    stageName: "Firing",
    stageOrder: 9,
    description: "Cone 10 firing.",
    hydration: 0,
    duration: 5,
    phase: "firing-stoneware",
    temperature: 1000,
    shrinkage: 0,
    blurb: ""
};

// Add earthenware, porcelain, and finalized stoneware stages later.

export const phases: CeramicType[] = [
  plastic,
  wedging,
  throwing,
  handbuilding,
  leatherhard,
  drying,
  bisque,
  glaze,
  firing
];