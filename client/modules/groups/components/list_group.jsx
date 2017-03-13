import React from 'react';
import MenuItem from 'material-ui/MenuItem';

import Group from '/client/modules/groups/components/group.jsx';

const headingStyle = {
  padding: 18,
  margin: 0,
  color: 'white',
  fontWeight: 'normal',
  background: '#00BCD4'
}

class ListGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {groups, closeHandler, currentChat} = this.props;

    return (
      <div>
        <h2 style={headingStyle}>Groups</h2>
        {groups.map(group => (
          <Group key={group._id} group={group} currentChat={currentChat}  closeHandler={closeHandler}/>
        ))}
      </div>
    );
  }
}

export default ListGroup;
