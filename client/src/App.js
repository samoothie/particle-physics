import React, { useState } from "react";
import ApiSubmission from './ApiSubmission';
import ResultDisplay from './ResultDisplay';

const App = () => {
  // useState hook to initialize the mass with a value of 1 and a state variable to track changes to it.
  const [mass, setMass] = useState(1);

  // useState hook to initialize the velocity with a value of [0,0,0] and a state variable to track changes to it.
  const [velocity, setVelocity] = useState([0, 0, 0]);

  // useState hook to initialize the position with a value of [0,0,0] and a state variable to track changes to it.
  const [position, setPosition] = useState([0, 0, 0]);

  // Event handler to update the mass value in state when the input value changes.
  const handleMassChange = (event) => {
    setMass(Number(event.target.value));
  };

  // Event handler to update the velocity value in state when one of the velocity inputs changes.
  const handleVelocityChange = (index) => (event) => {
    // Create a copy of the velocity array
    const newVelocity = [...velocity];
    // Update the value of the selected velocity component
    newVelocity[index] = Number(event.target.value);
    // Update the velocity state with the updated velocity array
    setVelocity(newVelocity);
  };

  // Event handler to update the position value in state when one of the position inputs changes.
  const handlePositionChange = (index) => (event) => {
    // Create a copy of the position array
    const newPosition = [...position];
    // Update the value of the selected position component
    newPosition[index] = Number(event.target.value);
    // Update the position state with the updated position array
    setPosition(newPosition);
  };

  //handlers and variables for api submission result (lagrange output)
  const [result, setResult] = useState(null);
  const handleResult = (apiResult) => {
    setResult(apiResult);
  };

  const updateResult = (result) => {
    this.setState({ result });
  };

  return (
    <div>
      {/* Particle Simulator header */}
      <h1>Particle Simulator</h1>
      {/* Form to capture user inputs for mass, velocity, and position */}
      <form>
        {/* Input for mass */}
        <div>
          <label htmlFor="mass">Mass:</label>
          <input
            type="number"
            id="mass"
            value={mass}
            onChange={handleMassChange}
          />
        </div>
        {/* Input for velocity */}
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
        {/* Input for position */}
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="number"
            id="position-x"
            value={position[0]} // sets the initial value of the input to the x-axis value of the position state
            onChange={handlePositionChange(0)} // calls the handlePositionChange function and passes the index 0 to update the x-axis value of the position state
          />
          <input
            type="number"
            id="position-y"
            value={position[1]} // sets the initial value of the input to the y-axis value of the position state
            onChange={handlePositionChange(1)} // calls the handlePositionChange function and passes the index 1 to update the y-axis value of the position state
          />
          <input
            type="number"
            id="position-z"
            value={position[2]} // sets the initial value of the input to the z-axis value of the position state
            onChange={handlePositionChange(2)} // calls the handlePositionChange function and passes the index 2 to update the z-axis value of the position state
          />
        </div>
      </form>
      {/* displays the mass, velocity, and position values */}
      <p>
        Mass: {mass}
        <br />
        Velocity: [{velocity.join(", ")}]
        <br />
        Position: [{position.join(", ")}]
        <br />
        Lagrange: {"place holder lolz"}
        <br />
      </p>
    </div>
  );
};
export default App;
