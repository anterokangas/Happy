import React from 'react';
import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {getPrice, uniqueKey} from "../javascript/tools"
import Part from "./Part.js"

class Parts extends React.Component {

    // constructor (props) {
    //     // console.log("Parts: props="+JSON.stringify(props))

    //     super(props)
    //     this.state = {
    //         isLogged: this.props.isLogged,
    //         theHappening: this.props.theHappening,
    //         task: this.props.task,
    //         order: {...this.props.order},
    //     } 
    // }

    render () {
        console.log("Parts.render: state="+JSON.stringify(this.state))
        let tmpParts = []
        if(!this.props.parts) {
            return (
                <p>No Parts</p>
            )
        }
        for (let part of this.props.parts) {
            tmpParts.push(
                (
                <Part key={part.header}
                      happening={this.props.happening}
                      parts={this.props.parts}
                      part={part}/>
                )
            )
        }
        return (
            <div>
                {tmpParts}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Parts: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(Parts);
