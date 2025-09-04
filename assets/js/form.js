$(document).ready(function() {

    $('button').on('click', function(e) {
        let error      = false;
        let nameError  = '';
        let emailError = '';
        let termsError = '';

        const notifications   = $('#notifications');
        const nameErrorDescr  = $('#nameError');
        const emailErrorDescr = $('#emailError');
        const termsErrorDescr = $('#termsError');

        nameErrorDescr.html('');
        emailErrorDescr.html('');
        termsErrorDescr.html('');

        const name = $('#name');
        if ( name.val() === '' ) {
            error     = true;
            nameError = '<li><a href="#name">Je naam ontbreekt.</a></li>';
            nameErrorDescr.html('Vul je naam in.');
        }

        const email = validateEmail( $('#email').val() );
        if ( email === 'empty') {
            error      = true;
            emailError = '<li><a href="#email">Je e-mailadres ontbreekt.</a></li>';
            emailErrorDescr.html('Vul je e-mailadres in.');
        } else if ( email === false ) {
            error      = true;
            emailError = '<li><a href="#email">Het ingevulde e-mailadres is niet geldig.</a></li>';
            emailErrorDescr.html('Vul een geldig e-mailadres in (bijvoorbeeld naam@voorbeeld.nl).');
        }

        if ( $('#terms').prop("checked") === false ) {
            error      = true;
            termsError = '<li><a href="#terms">Ga akkoord met het privacybeleid.</a></li>';
            termsErrorDescr.html('Ga akkoord met het privacybeleid.');
        }

        if ( ! error ) {
            notifications.html(
                '<h3 class="notification-ok"><span role="alert">Bedankt voor de aanmelding!!</span></h3>');
        } else {
            notifications.html(
                '<h3 class="notification-error"><span role="alert">Het formulier is niet volledig ingevuld</span></h3>' + '<ul class="error-list-ul">' + nameError + emailError + termsError + '</ul>');
        }

        document.getElementById("notifications").focus();
        return false;
    });

    function validateEmail(email) {
        if ( email === '' ) {
            return('empty');
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});
