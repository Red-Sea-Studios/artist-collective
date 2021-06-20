$(function() {
    console.log("PHOTOS");
    $('.image').click(function() {
            url = $(this).attr('data-photo');
            $('#magnified').css('backgroundImage', `url(${url})`);
            $('#overlay').removeClass('hidden');
    });

    $('#overlay').click(function() {
        $('#overlay').addClass('hidden');
});
});