function toggleDialog(id)  {

    (function(style) {
        style.display = style.display === 'none' ? 'block' : 'none';
    })
    (document.getElementById(id).style);
}

function showChoice(form) {
    alert("Bedankt voor uw bestelling!.");
    form.submit()
}
