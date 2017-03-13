export default {
  addGroup({Meteor, LocalState}, groupname){
    if (!groupname) {
      return LocalState.set('GROUP_ERROR', 'Group name is required.');
    }
    LocalState.set('GROUP_ERROR', null);

    Meteor.call('groups.add', groupname, (err) => {
      if (err) {
        return LocalState.set("GROUP_ERROR", err.message);
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
}
