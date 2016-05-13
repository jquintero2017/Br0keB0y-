$(document).ready(function() {
    $.ajax({
        url: "https://scripted-yelp.herokuapp.com/business/sugar-factory-new-york-5",
    }).done(function(data) {
        $("#rating").text(data.rating);
        $("#display_phone").text(data.display_phone);
        $("#location").text(data.location.display_address);
    });
});