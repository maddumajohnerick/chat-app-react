import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const inputStyle = {
  width: 246
}

class AddGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addGroup.bind(this)}>
          <div>
            <TextField style={inputStyle}
            hintText="Group Name"
            floatingLabelText="Group Name"
            ref = "groupname"
            /><br />
            <FlatButton label="Add" primary={true} onTouchTap={this.addGroup.bind(this)}/>
          </div>
        </form>
      </div>
    );
  }

  addGroup(e){
    e.preventDefault();
    const {addGroup} = this.props;
    const {groupname} = this.refs;
    addGroup(groupname.input.value,);
    groupname.getInputNode().value = '';
  }
}

export default AddGroup;
