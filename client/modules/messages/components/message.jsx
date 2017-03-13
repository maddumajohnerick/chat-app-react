import React from 'react';
import Markdown from 'react-remarkable';
import {Meteor} from 'meteor/meteor';
import Paper from 'material-ui/Paper';

const messageHolderStyles = {
  display: 'block'
}
const senderMessageStyles = {
  float: 'right',
  marginBottom: 5,
  padding: 5
}
const receicerMessageStyles = {
  float: 'left',
  marginBottom: 5,
  padding: 5
}
const clearStyles = {
  clear: 'both'
}
const boldStyles = {
  color: '#0a8e9e',
  fontWeight: '100'
}
const paddingStyle = {
  margin: 0
}

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {message, groupId} = this.props;

    return (
      <div style={messageHolderStyles}>
        <Paper zDepth={1} className={this.checkSender(message.sender) ? "my-sender-bubble" : "my-receiver-bubble"}>

          {this.checkSender(message.sender) ?
            ""
            :
            <b style={boldStyles}>{groupId ? message.senderName+"" : ""}
            </b>
          }

          <Markdown className="my-nopadding" source={message.message} />
        </Paper>
        <div style={clearStyles}>
        </div>
      </div>
    );
  }

  checkSender(id){
    if(id == Meteor.userId()){
      return true;
    }
    else{
      return false;
    }
  }
}

export default Message;
