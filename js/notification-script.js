$(document).ready(function () {




    var down = false;

    $('#bell').click(function (e) {

        var color = $(this).text();

        if (down) {

            $('#box').css('height', '0px');
            $('#box').css('opacity', '0');
            $('#item').css('cursor', 'default');
            $('.notifications').css('display','none')
            down = false;

        } else {

            $('#box').css('height', 'auto');
            $('#box').css('opacity', '1');
            $('#item').css('cursor', 'pointer');
            $('.notifications').css('display','block')
            down = true;

        }



    });

});

function scrollToTarget(targetId) {
    // Get the height of the navigation bar
    var navbarHeight = document.getElementById('header-nav').offsetHeight + 45;

    // Get the position of the target element
    var targetPosition = document.getElementById(targetId).offsetTop;

    // Calculate the adjusted scroll position by subtracting the navbar height
    var adjustedPosition = targetPosition - navbarHeight;

    // Scroll to the adjusted position
    window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth'
    });
}


