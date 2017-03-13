import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const paddingStyle = {
  padding: 10,
  width: '100%'
}

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={paddingStyle}>
        <form onSubmit={this.register.bind(this)}>
          <div>
            <TextField
            hintText="Username"
            floatingLabelText="Username"
            ref = "email"
            /><br />
            <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            ref="password"
            /><br />
            <FlatButton label="Register" primary={true} onTouchTap={this.register.bind(this)}/>
          </div>
        </form>
      </div>
    );
  }

  register(e){
    e.preventDefault();
    const {register} = this.props;
    const {email, password} = this.refs;
    register(email.input.value, password.input.value);
  }
}

export default RegisterUser;
