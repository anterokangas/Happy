import React from 'react';
import {Form, Button} from 'semantic-ui-react';


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            rights: {admin: false, owner: false, groupLeader: false},
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
            password: this.state.password, 
            rights: this.state.rights,
        }
        if (user.username.length < 4 || user.password.length < 8) {
            alert("Username must be at least four characters and password atleast eight characters long")
            return
        }
        if (event.target.name === "register") {
            this.props.register(user)
        } else {
            this.props.login(user)
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
                <Form.Field>
                    <label htmlFor="rights">Rights:</label>
                    <div class="ui checkbox">
                    <input type="checkbox" name="rights" id="adminRight" />
                    <label>Admin</label>
                    </div>
                    <div class="ui checkbox">
                    <input type="checkbox" name="rights" id="ownerRight" />
                    <label>Owner</label>
                    </div>
                    <div class="ui checkbox">
                    <input type="checkbox" name="rights" id="groupLeaderRight" />
                    <label>Owner</label>
                    </div>

                </Form.Field>
                <Button name="login" onClick={this.click}>Login</Button>
                <Button name="register" onClick={this.click}>Register</Button>
            </Form>
            </div>
        )
    }
}