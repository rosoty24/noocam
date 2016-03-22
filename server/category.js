Meteor.methods({
	ADD_CATEGORY:function(obj){
		category.insert(obj);
	},
	DELETE_CAT:function(id){
		category.remove({_id:id});
	}
})