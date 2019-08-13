import React from 'react';
import './App.css';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import HappyBar from "./components/HappyBar"
import Title from "./components/Title"
import TaskBar from "./components/TaskBar"
import WorkBench from "./components/WorkBench"

class App extends React.Component {
    render() {
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

        )
  }
}

const mapStateToProps = (state) => {
  return {
      isLogged: state.login.isLogged,
  }
} 

export default withRouter(connect(mapStateToProps)(App));  // JÄRJESTYS NÄIN!

// function App() {
//   return (
//     <div className="App" style={{"backgroundColor": "darkgrey", height: "100%"}}>
//       <HappyBar />
//       <hr style={{height: "1px solid"}} />
//       <Title />
//       <hr style={{height: "1px solid"}} />
//       <TaskBar />
//       <hr style={{height: "1px solid"}} />
//       <WorkBench />
//     </div>
//   );
// }

// export default App;
