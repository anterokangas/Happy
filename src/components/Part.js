import React from 'react';
import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {getPrice, uniqueKey} from "../javascript/tools"
import Products from "./Products"

class Part extends React.Component {

    // constructor (props) {
    //     // console.log("Part: props="+JSON.stringify(props))

    //     super(props)
    //     this.state = {
    //         ...this.state, 
    //         order:{}
    //     }
    // }

    render () {
        console.log("Part.render: state="+JSON.stringify(this.state))
        return (
            <fieldset>
            <legend>{this.props.header}</legend>
            <Products happening={this.props.happening}
                      parts={this.props.parts}
                      part={this.props.part}
                      products={this.props.part.products}/>
            </fieldset>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Part: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(Part);
