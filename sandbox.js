import React, { useState } from "react";

const App = () => {
  const [mass, setMass] = useState(1);
  const [velocity, setVelocity] = useState([0, 0, 0]);
  const [position, setPosition] = useState([0, 0, 0]);

  const handleMassChange = event => {
    setMass(Number(event.target.value));
  };

  const handleVelocityChange = (index) => (event) => {
    const newVelocity = [...velocity];
    newVelocity[index] = Number(event.target.value);
    setVelocity(newVelocity);
  };

  const handlePositionChange = (index) => (event) => {
    const newPosition = [...position];
    newPosition[index] = Number(event.target.value);
    setPosition(newPosition);
  };

  return (
    <div>
      <h1>Particle Simulator</h1>
      <form>
        <div>
          <label htmlFor="mass">Mass:</label>
          <input
            type="number"
            id="mass"
            value={mass}
            onChange={handleMassChange}
          />
        </div>
        <div>
          <label htmlFor="velocity">Velocity:</label>
          <input
            type="number"
            id="velocity-x"
            value={velocity[0]}
            onChange={handleVelocityChange(0)}
          />
          <input
            type="number"
            id="velocity-y"
            value={velocity[1]}
            onChange={handleVelocityChange(1)}
          />
          <input
            type="number"
            id="velocity-z"
            value={velocity[2]}
            onChange={handleVelocityChange(2)}
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="number"
            id="position-x"
            value={position[0]}
            onChange={handlePositionChange(0)}
          />
          <input
            type="number"
            id="position-y"
            value={position[1]}
            onChange={handlePositionChange(1)}
          />
          <input
            type="number"
            id="position-z"
            value={position[2]}
            onChange={handlePositionChange(2)}
          />
        </div>
      </form>
      <p>
        Mass: {mass}
        <br />
        Velocity: [{velocity.join(", ")}]
        <br />
        Position: [{position.join(", ")}]
      </p>
    </div>
  );
};

export default App;

