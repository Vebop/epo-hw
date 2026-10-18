# Phases of Making Pottery

This repository `epo-hw` is a personal project to serve as a demonstration for an interview with Rubin Observatory's Education and Public Outreach team.
The requirements of this demo are as follows:

- Create a web application that showcases your frontend UI/visualization skills, this must be something brand new (not something you previously created) and you must abide by the following criteria:

  - You cannot use an LLM/AI of any kind to vibe code/generate code/produce the product you are showing off
  - You cannot use an application that itself uses an LLM/AI to generate the code
  - All development and design work must be done by you alone
  - The web app must be written using React v19
  - The web app must make use of the Intersection Observer API and contain animations to visualize a dataset triggered and animated via vertical scrolling, there are no requirements around which dataset you use
  - Optional, but of interest to the hiring committee:
    - Use of WebGL 3D visualizations, the code of which being written by you and contained in your codebase (no third party/iframe content)
    - Use of Next.js v15

## Initial Idea

I had the vision of walking into my ceramics studio, focusing in on the different tasks that I do when I arrive, and how I spend my time. Along with these visuals (as if there was a go-pro on my forehead) the user would see the status of the clay in many different ways. I was originally considering having direction and guidance along with references to videos and other educational material for each step of the clay-making process. I imagined this web app would be a stepping off point to learn about each phase.

## Current Status

To view one possibly recent version of this app see [the screen recording in the repository.](./screen-clip-app.mov)

Due to the limitations of reality, this web app has not yet fulfilled its potential ideated above. We currently stand at a two panel scrolly telling web app with a metrics section to the left, and placeholder cards scrolling by on the right.

Considering the bullets listed above, this web app

- Uses React v19 & Vite

- Uses the Intersection Observer API to watch which narrative (right) card is visible in the viewport

- Visualizes animations to represent a dataset (ceramic/claybody physical metrics)
  - Hydration bar displayed under 'Hydration:' with a corresponding percentage and blue section of the bar underneath
  - Temperature is visualized via color change and an addition of 'glow' during the two firing phases
  - Shrinkage visual - two concentric circles with the inner shrinking according to the shown shrinkage percentage
  - Duration animated via scrollDuration of the narrative cards on the Right panel.
    - Some phases of pottery (drying) take significantly longer than other phases (glazing) and the amount of scrolling associated with each phase shown in this app has been scaled to represent that difference.


- I have not used any LLM to generate code here.
- I do not use NextJS nor WebGL
- I did follow some WCAG guidelines and added some ARIA tags.



### Data references retrieved from:

Data in this app are meant for educational purposes only. For scientific measurements please use observations of your local conditions. My experiences are based on a Dry Heat. 🔥

https://ceramicinfospot.com/what-is-greenware-in-ceramics-the-stages-of-clay-explained/

https://ceramicinfospot.com/how-to-prepare-clay-for-throwing-the-complete-wedging-guide/

https://openlearning.aalto.fi/pluginfile.php/93249/mod_resource/content/1/From%20Clay%20to%20Ceramics%20Aalto%202021.pdf

## License

This work is licensed under No License. This work is copyrighted by me, Vebop, the author.