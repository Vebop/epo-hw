import type { CeramicType } from '../types/ceramics';
// review and update the actual data later
const plastic: CeramicType = {
  id: "plastic",
  stageName: "Plastic",
  stageOrder: 1,
  description: "Fresh clay ready to be used.",
  hydration: 22, //17-23%
  duration: "Months to years",
  scrollDuration: 1,
  phase: "Greenware",
  temperature: 25,
  shrinkage: 0,
  blurb: "Fresh clay from the bag, sitting on your shelf. You can see the condensation on the inside of the bag, and press your thumb to make an imprint on its rectangular surface.",
};

const wedging: CeramicType = {
  id: "wedging",
  stageName: "Wedging",
  description: "Preparing the clay for throwing or handbuilding.",
  stageOrder: 2,
  hydration: 20, //17-23%
  duration: "<1 hour",
  scrollDuration: 1,
  phase: "Greenware",
  temperature: 25,
  shrinkage: 0,
  blurb: "Shaping your fresh clay into a shape to throw. If handbuilding, you can skip this stage. If you are using clay you have previously worked with this step can help wake up the clay and make the texture and moisture level more uniform again, removing impurities.",
};

const throwing: CeramicType = {
    id: "throwing",
    stageName: "Throwing",
    stageOrder: 3,
    description: "Forming the clay on a potter's wheel.",
    hydration: 21, //20-22%
    duration: ".5-2 hours",
    scrollDuration: 1,
    phase: "Greenware",
    temperature: 25,
    shrinkage: 0,
    blurb: "Using centripetal motion and force along one axis to form a cylindrically symmetrical shape. The clay is compressed into the center, then opened, and pulled up to create a shape. Compression, shaping, and other techniques can be used to guide the clay into the desired form."
};

const handbuilding: CeramicType = {
    id: "handbuilding",
    stageName: "Handbuilding",
    stageOrder: 4,
    description: "Creating and joining slabs, coils, to form a piece by hand.",
    hydration: 19, //18-20%
    duration: "5-15 hours",
    scrollDuration: 2,
    phase: "Greenware",
    temperature: 25,
    shrinkage: 0,
    blurb: "This phase can describe most any other techniques outside of throwing. This includes altering thrown forms, building structures out of flattened slabs, or additively joining coils or other shapes of clay together to build up a structure."
};

const leatherhard: CeramicType = {
    id: "leatherhard",
    stageName: "Leatherhard",
    stageOrder: 5,
    description: "Clay that is partially dried and still somewhat pliable.",
    hydration: 14, //12-15%
    duration: "A day or up to a week",
    scrollDuration: 2,
    phase: "Greenware",
    temperature: 25,
    shrinkage: 5,
    blurb: "No matter the building method, clay will start to dry out and take on the texture of a hard leather. The potter can continually add moisture to the piece to lengthen this stage. Further alterations and handbuilding such as trimming or adding a handle can be done here, with caution. This phase covers a gradient of drying forms."
};

const drying: CeramicType = {
    id: "drying",
    stageName: "Drying",
    stageOrder: 6,
    description: "Slowly dry the form to avoid structural failures.",
    hydration: 5,
    duration: "Up to a week or more",
    scrollDuration: 4,
    phase: "Greenware",
    temperature: 20,
    shrinkage: 8,
    blurb: "Moisture slowly continues to leave the piece, sometimes covered under a sheet of plastic, sometimes kept in a controlled room or environment to slow the drying process. Bone-dry finalizes this stage and must be achieved before any firing can occur."
};

const bisque: CeramicType = {
    id: "bisque",
    stageName: "Bisque",
    stageOrder: 7,
    description: "First firing to convert greenware to bisque.",
    hydration: 0,
    duration: "6-24 hours",
    scrollDuration: 2,
    phase: "Bisqueware",
    temperature: 1000,
    shrinkage: 10,
    blurb: "(from the French bis-cuit, twice-baked) 'Bisque' or 'Biscuit' firing is a short, low temperature firing meant to strengthen the piece and remove further water. At this stage any organic materials are burned out, the clay molecules turn into ceramic, and molecularly bound water is driven off."
};

const glaze: CeramicType = {
    id: "glaze",
    stageName: "Glaze",
    stageOrder: 8,
    description: "Apply decoration or glaze to the bisque fired piece.",
    hydration: 3, //2-4%
    duration: "Minutes to a few hours",
    scrollDuration: 1,
    phase: "Bisqueware",
    temperature: 25,
    shrinkage: 10,
    blurb: "Decorations, glazes, and stains can be applied in this stage. Glazes are a suspension of chemicals or clay particles meant to form a protective, decorative, and future glass-like layer creating an outer shell on the final ceramic piece. "
};

const firing: CeramicType = {
    id: "firing",
    stageName: "Firing",
    stageOrder: 9,
    description: "Cone 10 firing.",
    hydration: 0,
    duration: "12-24 hours",
    scrollDuration: 2,
    phase: "Firing/Stoneware",
    temperature: 1300,
    shrinkage: 15, //4-15%
    blurb: "Final firing of a piece is meant to fully vitrify (turn into a glass) the ceramic object. Stoneware temperatures require Cone 10 (1100-1300 C) and reach a different level of vitrification compared to Porcelain and Earthenware. This stage sees the melting of the claybody along with the outer glaze, and at their intersection they reform to become one material with different layers."
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