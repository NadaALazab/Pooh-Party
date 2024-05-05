$(document).ready(function () {




    var down = false;

    $('#bell').click(function (e) {

        var color = $(this).text();
        if (down) {

            $('#box').css('height', '0px');
            $('#box').css('opacity', '0');
            $('#item').css('cursor', 'default');
            down = false;

        } else {

            $('#box').css('height', 'auto');
            $('#box').css('opacity', '1');
            $('#item').css('cursor', 'pointer');
            down = true;

        }

    });

});

