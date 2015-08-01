var signatures = new Firebase("https://inncubator.firebaseio.com/signatures");

var guestNames = [];
signatures.on("child_added", function(snapshot) {
    var guest = snapshot.val();
    var guestNameInWrongForm = guest.name;
    var guestNameInRightForm = guestNameInWrongForm.split(",").reverse().join(" ");
    //guestNames.push(guestNameInRightForm);
    guestNames.push(guestNameInWrongForm);
});

var getInfo = function(a) {
    var guestSearched = a.toString();
    
    signatures.on("child_added", function(snapshot) {
        person = snapshot.val();
        if (person.name == guestSearched) {
            $("#message").html("<h3>" + guestSearched.split(",").reverse().join(" ") + " signed the user agreement on: </h3>" + "<blockquote>" + person.date + "</blockquote>");
            $("h3:last").addClass("text-center");
            $("blockquote:last").addClass("text-center");
        };
    });
};

$("#search-form").autocomplete({
        hints: guestNames,
        width: 300,
        height: 30,
        onSubmit: function(text){
            getInfo(text);
        }
});
