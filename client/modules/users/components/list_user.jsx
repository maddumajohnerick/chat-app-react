import React from 'react';
import MenuItem from 'material-ui/MenuItem';

import User from '/client/modules/users/components/user.jsx';

const headingStyle = {
  padding: 18,
  margin: 0,
  color: 'white',
  fontWeight: 'normal',
  background: '#00BCD4'
}

class ListUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users, closeHandler, currentChat} = this.props;

    return (
      <div>
        <h2 style={headingStyle}>Users</h2>
        {users.map(user => (
          <User key={user._id} user={user} currentChat={currentChat} closeHandler={closeHandler}/>
        ))}
      </div>
    );
  }
}

export default ListUser;
