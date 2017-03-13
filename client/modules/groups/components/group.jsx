import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  closeHandlerTrigger() {
    const {group, closeHandler} = this.props;
    closeHandler(group._id);
  }

  isCurrent(){
    const {group, currentChat} = this.props;
    if(group._id == currentChat){
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    const {group} = this.props;

    return (
        <MenuItem
          rightIcon={this.isCurrent() ? <FontIcon className="material-icons">label</FontIcon> : <FontIcon className="material-icons"></FontIcon>}
          onTouchTap={this.closeHandlerTrigger.bind(this)}
          linkButton={true} href={`/messages/${group._id}`}
          >
            #{group.name}
          </MenuItem>
    );
  }
}

export default Group;
