import { useState, useEffect } from 'react';
import './App.css'
import type { CeramicType } from './types/ceramics'
import CeramicVisual from './components/CeramicVisual'
import { phases } from './data/phases'


function App() {
  // The state of the web app is the current active ceramic stage.
  const [activeCeramic, setActiveCeramic] = useState<CeramicType>(phases[0]);

  useEffect(() => {

    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: .20,
    };

    // Set a new activeCeramic when a stage-card reaches options's threshold
    function callback( entries ) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stageId = entry.target.getAttribute('data-stage-id');
          const ceramic = phases.find(phase => phase.id === stageId);
          if (ceramic) {
            setActiveCeramic(ceramic);
          }
        }
      });
    };

    // Create the eyes (observer)
    const observer = new window.IntersectionObserver(callback, options);
    // Watch all of the stage-cards with eyes (observer)
    document.querySelectorAll('.stage-card').forEach(card => observer.observe(card));

    // Stop watching
    return () => { observer.disconnect() };

  }, []);

  return (
    <main className="app-layout">
      <div className="visual-panel">
      <CeramicVisual ceramic={activeCeramic} />
      </div>
      <div className="narrative-panel">
      {phases.map((phase: CeramicType) => {
        return (
          // remove on click, how do I set 'active ceramic' based on scroll position?
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
