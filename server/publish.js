Meteor.publish("category",function(){
	return category.find();
});