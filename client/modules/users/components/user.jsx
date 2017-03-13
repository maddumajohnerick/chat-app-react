import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  closeHandlerTrigger() {
    const {user, closeHandler} = this.props;
    closeHandler(user._id);
  }

  isCurrent(){
    const {user, currentChat} = this.props;
    if(user._id == currentChat){
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    const {user} = this.props;

    return (
        <MenuItem
          rightIcon={this.isCurrent() ? <FontIcon className="material-icons">label</FontIcon> : <FontIcon className="material-icons"></FontIcon>}
          onTouchTap={this.closeHandlerTrigger.bind(this)}
          linkButton={true} href={`/messages/${user._id}`}
        >
          {user.username}
        </MenuItem>
    );
  }
}

export default User;
