import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {onLogin, onRegister} from './actions/loginActions'
import {connect} from 'react-redux';


class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    onChange = (event) => {
        let state = {}
        state[event.target.name] = event.target.value
        this.setState(state);
    }
    
    click = (event) => {
        event.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if (user.username.length < 4 || user.password.length < 8) {
            alert("Username must be at least four characters and password atleast eight characters long")
            return
        }
        if (event.target.name === "register") {
            this.props.dispatch(onRegister(user))
        } else {
            this.props.dispatch(onLogin(user))
        } 
    }

    render() {
        return (
            <div>
            <h1>Happy</h1>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                        name="username"
                        required={true}
                        onChange={this.onChange}
                        value={this.state.username} />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                           name="password"
                           required={true}
                           onChange={this.onChange}
                           value={this.state.password} />
                </Form.Field>
                <Button name="login" onClick={this.click}>Login</Button>
                <Button name="register" onClick={this.click}>Register</Button>
            </Form>
            </div>
        )
    }
}

export default connect()(LoginForm);
