// display metrics of a passed in ceramic record
import type { CeramicType } from '../types/ceramics';

function CeramicVisual({ceramic}: {ceramic: CeramicType}) {
    let temperatureColor = "var(--color-kiln-cold)"; // default color for low temperature
    let boxShadow = "none";

    if (ceramic.temperature >= 1000 && ceramic.temperature < 1300) {
        temperatureColor = "var(--color-kiln-warm)";
    } else if (ceramic.temperature >= 1300) {
        temperatureColor = "var(--color-kiln-hot)";
        boxShadow = "var(--color-kiln-glow-hot)";
    }

  return (
    <section className="ceramic-visual" style={{backgroundColor: temperatureColor, boxShadow: boxShadow}} aria-live="polite" aria-atomic="true" aria-label="Associated metrics to ceramics' stages">
      <h2>{ceramic.stageName}</h2>
      <p>{ceramic.description}</p>
      <dl>
        <dt>Hydration:</dt>
        <dd>{ceramic.hydration}%
            <div gauge-track className="hydration-bar" aria-hidden="true" >
                <div gauge-fill className="hydration-fill" style={{ width: `${ceramic.hydration}%` }}>
                </div>
            </div>
        </dd>
        <dt>Duration:</dt>
        <dd>{ceramic.duration}</dd>
        <dt>Phase:</dt>
        <dd>{ceramic.phase}</dd>
        <dt>Temperature:</dt>
        <dd>{ceramic.temperature} °C</dd>
        <dt>Shrinkage:</dt>
        <dd>{ceramic.shrinkage}%
            <div shrink-track className="shrinkage-icon" aria-hidden="true">
                <div shrunk-fill className="shrinkage-fill" style={{transform: `scale(${(100-ceramic.shrinkage)/100})`}}>
                </div>
             </div>
        </dd>
      </dl>
      <p>{ceramic.blurb}</p>
    </section>
  )
}

export default CeramicVisual