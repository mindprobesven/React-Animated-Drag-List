import * as React from 'react'

const InfoBox = () => {
  return (
    <div className="info-box">
      <h3 className="headline">ANIMATED DRAG LIST V0.2 BY SVEN KOHN</h3>
      <p className="body-text">React + TypeScript + SASS | {`< 15 KBs Size (Minified)`} | Chrome (stable) - Safari (untested)</p>
      <p className="body-text">A re-usable and responsive list component with the functionality to re-order items by dragging them vertically.
      Supports both touch and mouse events. Highly efficient with requestAnimationFrame, debouncing and no absolute positioning.</p>
    </div>
  )
}

export default InfoBox