import React, { useState } from "react";
import "./App.css";

const Row = ({ reps, percentage, max }) => {
  const weight = (percentage * max) / 100;
  const rounded = Math.floor(weight / 5) * 5;
  return (
    <div className="flex-container">
      <div>{reps}</div>
      <div>{rounded}</div>
    </div>
  );
};

const App = () => {
  const [max, setMax] = useState(100);
  return (
    <div className="root">
      <div className="flex-container">
        <div>TM</div>
        <div>
          <input
            type="text"
            value={max}
            onChange={e => {
              setMax(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />
      <Row reps={5} percentage={75} max={max} />
      <Row reps={5} percentage={80} max={max} />
      <Row reps={5} percentage={85} max={max} />
      <hr />
      <Row reps={3} percentage={80} max={max} />
      <Row reps={3} percentage={85} max={max} />
      <Row reps={3} percentage={90} max={max} />
      <hr />
      <Row reps={5} percentage={75} max={max} />
      <Row reps={3} percentage={85} max={max} />
      <Row reps={1} percentage={95} max={max} />
      <hr />
      <Row reps={5} percentage={60} max={max} />
      <Row reps={5} percentage={65} max={max} />
      <Row reps={5} percentage={70} max={max} />
      <hr />
    </div>
  );
};

export default App;
