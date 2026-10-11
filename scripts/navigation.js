$(document).ready(function() {
    console.log("Document is ready");

    $('#projects-link').click(function(event) {
        $('.site-tab').hide();
        $('#projects').show();
    });

    $('#home-link').click(function(event) {
        $('.site-tab').hide();
        $('#home').show();
    });

});