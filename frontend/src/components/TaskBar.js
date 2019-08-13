import React from 'react';
import {Link} from 'react-router-dom'
import {List, Select, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {happenings} from './../javascript/dbData'


let rights = {"admin": true, "owner": false, "groupLeader": true}


class TaskBar extends React.Component {

    happeningselected = (event, data) => {
        let action  = {
            type: "HAPPENING_SELECTED",
            theHappening: data.value
        }    
        this.props.dispatch(action)
    }


    render() { 
        let happeningOptions = []
        
        for (let happening in happenings) {
            happeningOptions.push({
                key: happening,
                value: happening,
                text: happenings[happening].title,
            })
        }
        let selecthappening = (
            <Select placeholder="Valitse Tapahtuma"
                    id="theHappening"
                    options={happeningOptions}
                    onChange={this.happeningselected}
                    />
        )
        let disableAdmin = !(this.props.isLogged && rights.admin)
        let disableOwner = !(this.props.isLogged && rights.owner)
        let disableGroupLeader = !(this.props.isLogged && rights.groupLeader)

        let taskbar = (
            <List horizontal divided>
               
                <List.Item>{selecthappening}</List.Item>
                <Button disabled={disableAdmin}>
                    <Link to="/admin">Admin</Link>
                </Button>
                <Button disabled={disableOwner}>
                    <Link to="/owner">Owner</Link>
                </Button>
                <Button disabled={disableGroupLeader}>
                    <Link to="/groupleader">GroupLeader</Link>
                </Button>
            </List>)
        return (
            <div style={{height: 45, width: "100%"}}>
                {taskbar}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("TaskBar: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(TaskBar);
