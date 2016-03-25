// ============== Categories ================

Router.route('/admin/addcategory', {
    name: 'addcategory',
    waitOn:function(){
        return [Meteor.subscribe("category")];
    }
});
Router.route('/admin/managecategory', {
    name: 'managecategory',
    waitOn:function(){
    	return [Meteor.subscribe("category"),Meteor.subscribe("images")];
    }
});
Router.route('/admin/editcategory/:_id', {
    name: 'editcategory',
    data:function(){
    	return category.findOne({_id:this.params._id});
    },
    waitOn:function(){
        return [Meteor.subscribe("category")];
    }
});

// ===================== INDUSTRY ============================= //

Router.route('/admin/addindustry', {
    name: 'addindustry',
    waitOn:function(){
        return [Meteor.subscribe("industry")];
    }
});
Router.route('/admin/manageindustry', {
    name: 'manageindustry',
    waitOn:function(){
        return [Meteor.subscribe("industry"),Meteor.subscribe("images")];
    }
});
Router.route('/admin/editindustry/:_id', {
    name: 'editindustry',
    data:function(){
        return industry.findOne({_id:this.params._id});
    },
    waitOn:function(){
        return [Meteor.subscribe("industry")];
    }
});

