Router.configure({
    layoutTemplate: 'mainLayout',
});
Router.route('/', {
    name: 'home'
});
Router.route('/login', {
    name: 'login'
});
Router.route('/register', {
    name: 'register'
});

