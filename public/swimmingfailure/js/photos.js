$(function() {
    console.log("PHOTOS");
    $('.photo').click(function() {
            url = $(this).attr('data-photo');
            $('#magnified').css('backgroundImage', `url(${url})`);
            $('#overlay').removeClass('hidden');
    });

    $('#magnified').click(function() {
        $('#overlay').addClass('hidden');
});
});