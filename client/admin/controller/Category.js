Template.addcategory.events({
	"click #submit":function(e){
		e.preventDefault();
		var name = $("#name").val();
		var image = Session.get('ADDIMAGEID');
		var parent = $("#parentId").val();
			alert(parent);
		var obj = {
			name:name,
			image:image,
			parent:parent
		}
		// Meteor.call("ADD_CATEGORY",obj,function(error){
		// 	if(error){
		// 		console.log("ADD_CATEGORY"+error.reason);
		// 	}else{
		// 		console.log("ADD_CATEGORY ERROR");
		// 		Router.go("/admin/managecategory");
		// 	}
		// });
	},
	'change #upload': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.managecategory.helpers({
	getImage: function(image){
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return "/uploads/"+img.copies.images.key;
        }else{
            return;
        }
    },
    getcategory:function(){
    	return category.find();
    }
});
Template.managecategory.events({
	"click #remove":function(){
		if(confirm("Are you sure want to delete this?")){
			Meteor.call("DELETE_CAT",this._id);
		}
	}
});
Template.addcategory.helpers({
	getParent:function(){
		return category.find({parent:0});
	}
});
Template.editcategory.helpers({
	getParent:function(){
		return category.find({parent:0});
	},
	currentParent:function(parent){
		if(parent == 0){
			return "parent";
		}else{
			return category.findOne({parent:parent}).name;
		}
	}
});
