$(document).ready(function() {
    $('#search-button').click(function() {
        var query = $('#search-bar').val().toLowerCase();
        if (query === 'cellbit' || query === 'oaffebs' || query === 'admin' || query === 'geometry dash') {
            $('#result').text('Wrong place');
        } else if (query === 'blue') {
            $('#popup-text').text("Papers killed it, Papers are teaching us what happened, they should have warned us about the papers, it is just weird seeing that we, who were supposed to get all there is to know, know so little and they said we already know too much, your answer is paper");
            $('#popup').css('display', 'flex');
        } else {
            $('#result').text('Wrong');
        }
    });

    $('#close-popup').click(function() {
        $('#popup').css('display', 'none');
    });
});
