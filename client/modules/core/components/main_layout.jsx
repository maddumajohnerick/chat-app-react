import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Meteor} from 'meteor/meteor';
import TrackerReact from "meteor/ultimatejs:tracker-react";
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import ListUser from '/client/modules/users/containers/list_user.js';
import ListGroup from '/client/modules/groups/containers/list_group.js';
import AddGroup from '/client/modules/groups/containers/add_group.js';

const iconStyles = {
  marginRight: 24
};

const appbarStyles = {
  cursor: 'pointer',
};

class Layout extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {open: false};
    this.state = {current: " - "};
  }

  handleTouchTap() {
    FlowRouter.go("/");
  }

  handleToggle(){
    this.setState({open: !this.state.open});
  }

  handleClose(name){
    this.setState({open: false});
    this.setState({current: name});
  }

  render() {
    const {content} = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title={<span style={appbarStyles}>ChatLet</span>}
            onTitleTouchTap={this.handleTouchTap.bind(this)}
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton>
                    <FontIcon className="material-icons" style={iconStyles}>account_box</FontIcon>
                  </IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                {Meteor.userId() ?
                  <div>
                    <MenuItem primaryText="Logout" linkButton={true} href="/logout"/>
                  </div>
                  :
                  <div>
                    <MenuItem primaryText="Register" linkButton={true} href="/users/register"/>
                    <MenuItem primaryText="Login" linkButton={true} href="/users/login"/>
                  </div>
                }
              </IconMenu>
            }
          />
          <div>
            <Drawer
              docked={false}
              width={250}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
            <ListUser currentChat={this.state.current} closeHandler={this.handleClose.bind(this)}/>
              <ListGroup currentChat={this.state.current} closeHandler={this.handleClose.bind(this)}/>
              <hr/>
              <AddGroup />
            </Drawer>
          </div>
          {content()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
