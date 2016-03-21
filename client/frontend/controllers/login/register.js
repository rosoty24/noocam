Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var myrole = $('#selectrole').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var status=0;
        Meteor.call('registerUser',email,password,myrole,status,function(err){
            if(err)console.log("register error");
            else Router.go('/login');
        });
        
    }
});