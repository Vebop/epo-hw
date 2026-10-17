import { useState } from 'react';
import './App.css'
import type { CeramicType } from './types/ceramics'
import CeramicVisual from './components/CeramicVisual'
import { phases } from './data/phases'


// Map over your phases array to render your narrative cards down the page
// with enough vertical spacing to allow for scrolling.

// Apply the two-column sticky CSS layout so that when you scroll down the page,
//  your visualizer remains pinned on the screen while the cards scroll past.

function App() {
  // create a state variable holding the active ceramic record and pass it to
  // the ceramic visual component to display the metrics of the ceramic record
  const [activeCeramic, setActiveCeramic] = useState<CeramicType>(phases[0]);
  return (
    <main className="app-layout">
      <div className="visual-panel">
      <CeramicVisual ceramic={activeCeramic} />
      </div>
      <div className="narrative-panel">
      {phases.map((phase: CeramicType) => {
        return (
          <section className="stage-card" data-stage-id={phase.id} key={phase.id} onClick={() => setActiveCeramic(phase)}>
            <h3>{phase.stageName}</h3>
            <p>{phase.blurb}</p>
          </section>
        )
      })}
      </div>
    </main>
  )
}

export default App
