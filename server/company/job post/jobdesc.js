Meteor.methods({
	insertJobDesc:function(postsId,obj){
		return posts.update({_id:postsId},{$set:{"jobdesc":obj}});
	}
})