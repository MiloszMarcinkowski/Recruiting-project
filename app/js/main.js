$(document).ready(function () {

    var anchor = $('a[href="#main"]');

    /***** bouncing arrow *****/
    setInterval(function () {
        anchor.animate({ "top": "-=30px" }, 500).animate({ "top": "+=30px" }, 500);
    }, 3000);

    /***** scroll down animation *****/
    anchor.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

    /***** form *****/
    $('form').submit(function (e) {

        e.preventDefault();

        var name = $('#name').val(),
            email = $('#email').val();
        submit = $('#submit').val();
        checkbox = $('#checkbox').is(':checked');

        testCheckbox();
        $('#submit').prop('disabled', true); //preventing multiple clicks
        $.ajax({
            url: "https://www.enformed.io/cqus9dh4/",
            method: "POST",
            data: {
                Imię: name,
                Email: email,
                Submit: submit,
                Zgoda: checkbox
            },
            success: function () {
                console.log('Success');
                $('#form').css('display', 'none');
                $('#error').css('display', 'none');
                $('#success').css('display', 'initial');
            },
            error: function (request, status, error) {
                console.log('Error');
                $('#error').css('display', 'initial');
                $('#submit').prop('disabled', false); //disable prevent multiple clicks
            }
        });
    });
    function testCheckbox() {
        if (checkbox) {
            checkbox = 'Wyrażam zgodę na dożywotnią, odpłatną dostawę ciastek do mojego domu!';
        } else {
            checkbox = 'Nie wyrażam zgody na dożywotnią, odpłatną dostawę ciastek do mojego domu!';
        }
    }
});