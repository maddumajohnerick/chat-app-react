export default {
  sendMessage({Meteor, LocalState}, message, reciever){
    if (!message) {
      return LocalState.set('MESSAGE_ERROR', 'Message is required.');
    }
    LocalState.set('MESSAGE_ERROR', null);

    Meteor.call('messages.send', message, reciever, (err) => {
      if (err) {
        return LocalState.set("MESSAGE_ERROR", err.message);
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
}
