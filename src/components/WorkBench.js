import React from 'react';
import {connect} from 'react-redux';
import UserRegistrationForm from './UserRegistrationForm'


class WorkBench extends React.Component {

    render() { 
        switch (this.props.task) {
            case "NONE":
                return <p>Select a Happening or Login</p>

            case "USERREGISTRATION":
                return (<UserRegistrationForm />)

            default:
                return  <p>Unknown Task: {this.props.task}</p>

        }
    }
}

const mapStateToProps = (state) => {
    console.log("WorkBench: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
    }
}

export default connect(mapStateToProps)(WorkBench);
