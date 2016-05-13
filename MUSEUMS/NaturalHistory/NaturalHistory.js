$(document).ready(function() {
    $.ajax({
        url:"https://scripted-yelp.herokuapp.com/business/american-museum-of-natural-history-new-york",
    }).done(function(data) {
        $("#rating").text(data.rating);
        $("#display_phone").text(data.display_phone);
        $("#location").text(data.location.display_address);
    });
});