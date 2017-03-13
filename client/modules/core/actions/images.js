import {Images} from '/lib/collections';

export default {
  uploadImage({Meteor, LocalState}, file){
    if (!file) {
      return LocalState.set('UPLOAD_ERROR', 'File is required.');
    }
    LocalState.set('UPLOAD_ERROR', null);
    console.log(file);

    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile);
    }

    //upload here then meteor call
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
}
