Meteor.publish("category",function(){
	return category.find();
});
Meteor.publish("images",function(){
	return images.find();
});
Meteor.publish("industry",function(){
	return industry.find();
});