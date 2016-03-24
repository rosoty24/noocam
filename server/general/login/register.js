Meteor.methods({
   registerUser: function (email,password,myrole,status){
        targetUserId=Accounts.createUser({
            email: email,
            password: password,
            profile:{status:status}
           });
        console.log(targetUserId);
        // Roles.setUserRoles(id,'member')
        Roles.setUserRoles(targetUserId, [myrole], 'mygroup')
  }
});