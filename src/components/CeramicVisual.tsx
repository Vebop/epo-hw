// display metrics of a passed in ceramic record
import type { CeramicType } from '../types/ceramics';

function CeramicVisual({ceramic}: {ceramic: CeramicType}) {
  return (
    <section className="ceramic-visual">
      <h2>{ceramic.stageName}</h2>
      <p>Stage Order: {ceramic.stageOrder}</p>
      <p>Description: {ceramic.description}</p>
      <p>{ceramic.blurb}</p>
      <dl>
        <dt>Hydration</dt>
        <dd>{ceramic.hydration}</dd>
        <dt>Duration</dt>
        <dd>{ceramic.duration}</dd>
        <dt>Phase</dt>
        <dd>{ceramic.phase}</dd>
        <dt>Temperature</dt>
        <dd>{ceramic.temperature}</dd>
        <dt>Shrinkage</dt>
        <dd>{ceramic.shrinkage}</dd>
      </dl>
    </section>
  )
}

export default CeramicVisual