// ============== Categories ================
Router.route('/admin/addproduct', {
    name: 'addproduct'
});
Router.route('/admin/product', {
    name: 'product'
});
Router.route('/admin/addcategory', {
    name: 'addcategory',
    waitOn:function(){
        return [Meteor.subscribe("category")];
    }
});
Router.route('/admin/managecategory', {
    name: 'managecategory',
    waitOn:function(){
    	return [Meteor.subcribe("category")];
    }
});
Router.route('/admin/editcategory/:_id', {
    name: 'editcategory',
    data:function(){
    	return category.findOne({_id:this.params._id});
    },
    waitOn:function(){
        return [Meteor.subcribe("category")];
    }
});


