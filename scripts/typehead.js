var signatures = new Firebase("https://inncubator.firebaseio.com/signatures");

var guestNames = [];
signatures.on("child_added", function(snapshot) {
    var guest = snapshot.val();
    var guestNameInWrongForm = guest.name;
    var guestNameInRightForm = guestNameInWrongForm.toLowerCase();

    if (guestNames.indexOf(guestNameInRightForm) == -1) {
        console.log(guest.signed);
        if (guest.signed == "yes") {
            guestNames.push(guestNameInRightForm);
        }
    };
});
var getInfo = function(a) {
    var guestSearched = a.toString();
    
    signatures.on("child_added", function(snapshot) {
        person = snapshot.val();

        if (person.name.toLowerCase() == guestSearched) {
            $("#message").html("<h3>" + guestSearched + " signed the user agreement on: </h3>" + "<blockquote>" + person.date + "</blockquote><h3>TIMESTAMP OF THE SIGNATURE</h3><blockquote>" + person.timestamp + "</blockquote>");
            $("h3").addClass("text-center");
            $("blockquote").addClass("text-center");
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
