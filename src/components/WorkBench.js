import React from 'react';
import {connect} from 'react-redux';


import {happenings} from '../javascript/dbData'
import UserRegistrationForm from './UserRegistrationForm'


class WorkBench extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLogged: false,
    //         theHappening: "",
    //         task: "",
    //         order: {},
    //     }
    // }

    render() { 
        
        console.log("WorkBench.render: state="+JSON.stringify(this.state))
        switch (this.props.task) {
            case "NONE":
                return <p>Select a Happening or Login</p>

            case "USERREGISTRATION":
                let happening = happenings[this.props.theHappening]
                if (!happening) {
                    return (
                        <p>No Happening as "{this.props.theHappening}"</p>
                    )
                }
                return (<UserRegistrationForm happening={happening} />)

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
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(WorkBench);
