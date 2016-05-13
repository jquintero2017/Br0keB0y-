$(document).ready(function() {
    $.ajax({
        url:"https://scripted-yelp.herokuapp.com/business/the-museum-of-modern-art-new-york-3",
    }).done(function(data) {
        $("#rating").text(data.rating);
        $("#display_phone").text(data.display_phone);
        $("#location").text(data.location.display_address);
    });
});