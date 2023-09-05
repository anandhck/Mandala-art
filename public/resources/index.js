$(document).ready(function() {
    $('.rectangle-20').click(function() {
        console.log("clicked")
        var target = $(this).data('target');
        $('.circ-heal-studio-unleash-creativity-heal-with-art').hide();
        $('#' + target).show();
    });
});