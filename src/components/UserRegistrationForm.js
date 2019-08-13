import React from 'react';
import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getPrice, uniqueKey} from "../javascript/tools"

import Parts from "./Parts.js"

class UserRegistrationForm extends React.Component {

    // constructor (props) {
    //     // console.log("UserRegForm: props="+JSON.stringify(props.happening))
    //     super(props)
    //     this.state = {
    //         isLogged: this.props.isLogged,
    //         theHappening: this.props.theHappening,
    //         task: this.props.task,
    //         order: {...this.props.order},
    //     }
    // }

    onSubmit = (event) => {
        event.preventDefault()
        let formData = {};
        for (let field in this.refs) {
          formData[field] = this.refs[field].value;
        }
        console.log('-->formData1=', formData);
       
        this.props.dispatch({
            type: "SAVE_USERREGISTRATION_DATA",
            order: formData,
        })
    }

    render () {
        console.log("UserRegistrationForm.render: state="+JSON.stringify(this.state))
        let happening = this.props.happening
        return (
            <Form onSubmit={this.onSubmit} name="UserRegistrationForm">
                <Form.Field>
                    <h1>{happening.title}</h1>
                    <h2>{happening.description}</h2>
              
                    <Parts happening={happening}
                           parts={happening.parts}/>
                    <h3>
                        <label htmlFor={happening.total}>{happening.total}:</label>
                        <input type="number"
                            readOnly 
                            name={happening.total}
                            value="0" />
                    </h3>
                </Form.Field>
                
                <Button type="submit">Talleta lomake</Button>
            </Form> 
        )
    }
}

const mapStateToProps = (state) => {
    console.log("UserRegistrationForm: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(UserRegistrationForm);