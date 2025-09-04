$(document).ready(function() {

    $('button').on('click', function(e) {

        const status  = $(this).data('status');
        console.log(status);

        const update  = $('#status-update');
        const wrapper = $('#status-wrapper');
        const announce = $('#status-announce');

        if ( status  === 'filter' ) {
            update.html('<p>Er zijn 30 resultaten gevonden.</p>');
            announce.html('Er zijn 30 resultaten gevonden.');
            wrapper.removeAttr('hidden');
        }

        if ( status === 'verstuur' ) {
            update.html('<p>Uw formulier is succesvol verzonden.</p>');
            announce.html('Uw formulier is succesvol verzonden.');
            wrapper.removeAttr('hidden');
        }

        if (status === 'sluit') {
            wrapper.attr('hidden', true);
        }
        return false;
    });


});
