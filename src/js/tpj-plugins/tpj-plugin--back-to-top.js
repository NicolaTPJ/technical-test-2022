// Back to top feature
$(function () {
    var bttBtn = $('#back-to-top');
    bttBtn.css({
        opacity: 0,
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            bttBtn
                .stop()
                .css({
                    display: 'block',
                })
                .animate(
                    {
                        opacity: 1,
                    },
                    250
                );
        } else {
            bttBtn.stop().animate(
                {
                    opacity: 0,
                },
                250,
                function () {
                    $(this).css({
                        display: 'none',
                    });
                }
            );
        }
    });
    bttBtn.on('click', function () {
        $('body,html').animate(
            {
                scrollTop: 0,
            },
            800
        );
        return false;
    });
});
