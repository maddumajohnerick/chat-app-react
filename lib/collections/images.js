import {Mongo} from 'meteor/mongo';


const Images = new FS.Collection("Images", {
  stores: [new FS.Store.GridFS("Images")]
});

Images.allow({
      update: function () {
       // add custom authentication code here
      return true;
      },
      insert: function () {
       // add custom authentication code here
      return true;
      },
      download:function(){
        return true;
      }
 });

export default Images;
