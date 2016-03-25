Template.jobdesc.events({
    'click #jobdes': function(event) {
        event.preventDefault();
        var postsId=Session.get("POSTSID");
        var jobdesc = $('#jobdescription').val();
        var jobReq=$('#jobRequirement').val();
        var obj={
        	jobdesc:jobdesc,
        	jobReq:jobReq
        }
        Meteor.call("insertJobDesc",postsId,obj,function(err){
        	if(err){
        		console.log("Error "+err.reason);
        	}else{
        		console.log("Success insertJobDesc");
        		Router.go("/post/contact");
        	}
        });
    }
});