Meteor.methods({
	insertJobPost:function(obj){
		return postsAnnouncement.insert(obj);
	}
})