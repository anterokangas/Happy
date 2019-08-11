import React from 'react';
import './App.css';
import HappyBar from "./components/HappyBar"
import Title from "./components/Title"
import TaskBar from "./components/TaskBar"
import WorkBench from "./components/WorkBench"


function App() {
  return (
    <div className="App" style={{"backgroundColor": "darkgrey", height: "100%"}}>
      <HappyBar />
      <hr style={{height: "1px solid"}} />
      <Title />
      <hr style={{height: "1px solid"}} />
      <TaskBar />
      <hr style={{height: "1px solid"}} />
      <WorkBench />
    </div>
  );
}

export default App;
