import React, { Component } from 'react';
import MessageBoardDisplay from '../components/MessageBoardDisplay';
import { connect } from 'react-redux';


class Home extends Component { 
    
    render(){
        console.log(this.props)
        return (
        <div>
            <h4>Your lyrics of note live here</h4>
            <MessageBoardDisplay />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Home)