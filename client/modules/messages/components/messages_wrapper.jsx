import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {Meteor} from 'meteor/meteor';

import Message from '/client/modules/messages/components/message.jsx';

const messageBodyStyle = {
  height: 400,
  padding: 10,
  overflowX: 'hidden',
  overflowY: 'scroll'
}

const formStyle = {
  height: 100
}

class MessagesWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var $element = $(".my-message-height");
    var lastHeight = $(".my-message-height").css('height');

    var objDiv = $(".my-message-holder");
    objDiv.scrollTop($(".my-message-height").height());
    setInterval(function(){
      if ($element.css('height') != lastHeight)
      {
        lastHeight = $element.css('height');

        var objDiv = $(".my-message-holder");
        // objDiv.scrollTop($(".my-message-height").height());
        objDiv.animate({scrollTop: $(".my-message-height").prop("scrollHeight")}, 500);
      }
    },200);
  }

  render() {
    const {userId, messages, useremail, groupInfo} = this.props;

    return (
      <div className="my-body">
        <List>
          <ListItem
          disabled={true}
          leftAvatar={
            <Avatar icon={<FontIcon className="material-icons">account_circle</FontIcon>} />
          }
          >
          {useremail ? useremail[0].username : "#"+groupInfo[0].name}
          </ListItem>
        </List>
        <form onSubmit={this.sendMessage.bind(this)} className="my-form-resize">
          <div className="my-message-holder">
            <div className="my-message-height">
            {messages.map(message => (
              <Message groupId={groupInfo} message={message} key={message._id}/>
            ))}
            </div>
          </div>
          <div className="my-message-form">
            <TextField className="my-pull-left"
            hintText="Message"
            floatingLabelText="Message"
            fullWidth={true}
            rowsMax={1}
            ref="message"
            />
            <FlatButton className="my-pull-right"
              label="Send"
              labelPosition="before"
              secondary={true}
              icon={<FontIcon className="material-icons">send</FontIcon>}
              onTouchTap={this.sendMessage.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }

  sendMessage(e){
    e.preventDefault();

    const {message} = this.refs;
    const {userId, groupId, sendMessage} = this.props;
    const thisId = userId ? userId : groupId;
    sendMessage(message.input.value, thisId);
    message.getInputNode().value = '';
  }
}

export default MessagesWrapper;
