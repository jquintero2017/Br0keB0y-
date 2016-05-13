$(document).ready(function() {
    $.ajax({
        url: "https://scripted-yelp.herokuapp.com/business/max-brenner-new-york-new-york",
    }).done(function(data) {
        $("#rating").text(data.rating);
        $("#display_phone").text(data.display_phone);
        $("#location").text(data.location.display_address);
    });
});