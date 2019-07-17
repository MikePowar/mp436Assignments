import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import MesageBoardDisplay from './MessageBoardDisplay';

class ClickedMessage extends Component {

    render(){
        let id = this.props.match.params.message_id;
        const parseId = parseInt(id);
        const result = this.props.messages.find(message => (message.id === parseId));
        console.log(this.props)
        return(
        <div>
            <h4>Detail View</h4>
            <h4>Message Id: {id}</h4>
            <div className="messageList">
                <div className="message" key={ result.id }>
                    <div>Name:{ result.name } </div>
                    <div>Message:{ result.message } </div>
                </div>
            </div>
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}


export default connect(mapStateToProps)(ClickedMessage);