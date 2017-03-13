import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const paddingStyle = {
  padding: 10,
  width: '100%'
}

class LoginUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={paddingStyle}>
        <form onSubmit={this.login.bind(this)}>
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
            <FlatButton label="Login" primary={true} onTouchTap={this.login.bind(this)}/>
          </div>
        </form>
      </div>
    );
  }

  login(e){
    e.preventDefault();
    const {login} = this.props;
    const {email, password} = this.refs;
    login(email.input.value, password.input.value);
  }
}

export default LoginUser;
