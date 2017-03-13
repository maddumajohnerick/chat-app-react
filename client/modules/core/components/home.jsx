import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 120,
  width: '100%',
  textAlign: 'center',
};

class Home extends React.Component {
  render() {
    const {content} = this.props;

    return (
      <div>
      <br/>
        <Paper style={style} zDepth={5} >
          <br/>
          <center><h1>Welcome Visitors </h1></center>
        </Paper>
      </div>
    );
  }
}

export default Home;
