import React from 'react';
import {Link} from "react-router-dom"
import {List, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';


class HappyBar extends React.Component {

    loginout = (event) => {
        console.log("login clicked")
        let action = {
            type: "LOGINOUT",
        }   
        this.props.dispatch(action)
    }

    render() {
        console.log("HappyBar isLogged=" + this.props.isLogged)
        let loginLogout = this.props.isLogged ? "Logout" : "Login"
        let logger = (
            <List.Item>
                <Link to="/login"
                    onClick={this.loginout}
                    id="loginout"
                >{loginLogout}
                </Link>
            </List.Item>
        )  
        let signupper = ""
        if (!this.props.isLogged) {
            signupper = (    
                <List.Item>
                    <Link to="/signup">
                    <span style={{border: "1px solid", 
                                "borderRadius": "5px"}}>&nbsp; Sign Up Free &nbsp;
                    </span>
                    </Link>
                </List.Item>
            )
        }
        console.log("loginLogout "+loginLogout+":"+logger)
        let happybar = 
            <List horizontal
                  style={{
                    width: "80%",
                    "display": "flex",
                    "justifyContent": "space-between",
                    "margin": "0 auto",
                    "alignItems": "center",}}>
                <List.Item>
                    <List.Content floated="left">
                    <Image avatar src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/161/smiling-face-with-smiling-eyes_1f60a.png"
                         />Happy - Happening Registration and Market Place
                    </List.Content>
                </List.Item>
                         
                <List.Item>
                    <List.Content floated="right">
                        <List horizontal >
                            <List.Item>
                                <Link to="/help">Help</Link>
                            </List.Item>
                            {logger}
                            {signupper}
                        </List>
                    </List.Content>
                </List.Item>
            </List>
        return (
            <div style={{height: 34,  
                         "display": "flex",
                         "alignItems": "center"}}>
                {happybar}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("HappyBar: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(HappyBar);
