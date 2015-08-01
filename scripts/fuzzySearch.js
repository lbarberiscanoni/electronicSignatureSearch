var signatures = new Firebase("https://inncubator.firebaseio.com/signatures");

    var guestNames = new Array();
    signatures.on("child_added", function(snapshot) {
        var guest = snapshot.val();
        guestNames.push(guest.name);
    });

    $("#inputOfSearch").keypress(function() {
        var f = new Fuse(guestNames);
        var inputOfSearch = $("#inputOfSearch").val();
        var result = f.search(inputOfSearch);

        for (var i = 0; i < result.length; i++) {
            var indexOfName = result[i];
            $("#results").text(guestNames[indexOfName]);
        };
    });
