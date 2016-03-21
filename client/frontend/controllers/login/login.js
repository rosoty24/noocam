Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        console.log(email+password);
        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                console.log(error.reason);
                if (error.reason == "User not found") {
                    $('.errorMs').css('display', 'block');
                }
                if (error.reason == "Incorrect password") {
                    $('.errorMs1').css('display', 'block');
                }
            } else {
                var loggedInUser = Meteor.user();
                var group = 'mygroup';
                if (Roles.userIsInRole(loggedInUser, ['employer'], group)) {
                    Router.go('/company/profile');
                } else if (Roles.userIsInRole(loggedInUser, ['jobSeeker'], group)) {
                    Router.go('/jobseeker/profile');
                } else {
                    Router.go('/login');
                }

            }
        });
    }

});
