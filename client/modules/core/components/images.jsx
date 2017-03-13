import React from 'react';

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadImage(e){
    e.preventDefault();
    const {uploadImage} = this.props;
    // const {testTxt} = this.props;
    // console.log(testTxt);
    var file = $("#imageFile").get(0).files[0];
    // console.log(file);
    uploadImage(file);

  }

  render() {
    const {testTxt} = this.props;
    console.log(testTxt);

    return (
      <div>
        <h1>Images</h1>
        <form enctype="multipart/form-data" onSubmit={this.uploadImage.bind(this)}>
        <input type="file" id="imageFile"/>
        <input type="submit" value="Upload"/>
        </form>
      </div>
    );
  }
}

export default Images;
