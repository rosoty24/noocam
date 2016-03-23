Template.jobinfo.events({
    'click #btnNext': function(event) {
        event.preventDefault();
        var level = $('#joblevel').val();
        var yearExp=$('#yearExp').val();
        var nbhiring=$('#nbhiring').val();
        var sex=$('#sex').val();
        var age=$('#age').val();
        var publishdate=$('#publishdate').val();
        var selectterm=$('#selectterm').val();
        var selectFunction=$('#selectFunction').val();
        var selectIndustry=$('#selectIndustry').val();
        var selectQual=$('#selectQual').val();
        var selectLanguage=$('#selectLanguage').val();
        var selectLocation=$('#selectLocation').val();
        var closedate=$('#closedate').val();
        var jobpost={
            level:level,
            yearExp:yearExp,
            nbhiring:nbhiring,
            sex:sex,
            age:age,
            publishdate:publishdate,
            selectterm:selectterm,
            selectFunction:selectFunction,
            selectIndustry:selectIndustry,
            selectQual:selectQual,
            selectLanguage:selectLanguage,
            selectLocation:selectLocation,
            closedate:closedate
        }
        alert("hello");
        Meteor.call("insertJobPost",jobpost,function(err){
            if(err) console.log("errors insertJobPost "+err.reason);
            else console.log("success insert job post");
        });
        
    }
});