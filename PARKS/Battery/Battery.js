$(document).ready(function() {
    $.ajax({
        url:"https://scripted-yelp.herokuapp.com/business/biz/battery-park-new-york",
    }).done(function(data) {
        $("#rating").text(data.rating);
        $("#location").text(data.location.display_address);
    });
});