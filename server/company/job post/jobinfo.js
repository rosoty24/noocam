Meteor.methods({
	insertJobPost:function(obj){
		return posts.insert(obj);
	}
})