$(document).ready(function() {
    console.log("sdfsdf");
    $("#submitButton").on("click", function() {
        
        function newForm() {
            
            var completeForm = true;
            $(".form-control").each(function() {
                if ($(this).val() === ""){
                    completeForm = false;
                }
            });
            $(".select").each(function() {
                if ($(this).val() === ""){
                    completeForm = false;
                }
            });
            return completeForm;
        }
         
        if (newForm() == true) {
             
            var newFriend = {
                name: $("#formName").val().trim(),
                profilePic: $("#formImage").val().trim(),
                scores: [
                    $('#Q1').val(),
                    $('#Q2').val(),
                    $('#Q3').val(),
                    $('#Q4').val(),
                    $('#Q5').val(),
                    $('#Q6').val(),
                ]
            };
             
            var currentURL = window.location.origin;
             
            $.post(currentURL + "/api/friends", newFriend, function(data) {
                
                $("#matchName").text(data.name);
                $("#matchImg").attr("src", data.photo);
                $("#resultsModal").modal("toggle");
            });
            
            $('#formName').val("");
            $('#formImage').val("");
            $('#Q1').val("");
            $('#Q2').val("");
            $('#Q3').val("");
            $('#Q4').val("");
            $('#Q5').val("");
            $('#Q6').val("");
        } else {
            alert("Please complete the form")
        }
        
    });
});