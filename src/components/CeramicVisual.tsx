// display metrics of a passed in ceramic record
import type { CeramicType } from '../types/ceramics';

function CeramicVisual({ceramic}: {ceramic: CeramicType}) {
  return (
    <section className="ceramic-visual">
      <h2>{ceramic.stageName}</h2>
      <p>{ceramic.description}</p>
      <dl>
        <dt>Hydration:</dt>
        <dd>{ceramic.hydration}%
            <div gauge-track className="hydration-bar" >
                <div gauge-fill className="hydration-fill" style={{ width: `${ceramic.hydration}%` }}>
                </div>
            </div>
        </dd>
        <dt>Duration:</dt>
        <dd>{ceramic.duration} hours</dd>
        <dt>Phase:</dt>
        <dd>{ceramic.phase}</dd>
        <dt>Temperature:</dt>
        <dd>{ceramic.temperature} °C</dd>
        <dt>Shrinkage:</dt>
        <dd>{ceramic.shrinkage}%</dd>
      </dl>
      <p>{ceramic.blurb}</p>
    </section>
  )
}

export default CeramicVisual