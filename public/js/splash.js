jQuery(() => {
    // Add visitors this way so the server won't register captive checks as visits.
    $.ajax({
        url: '/visitor',
        type: 'post'
    });

    $('#insult').click((e) => {
        $.ajax({
            url: '/insult',
            type: 'post',
            success: () => {
                $('#insults').text($('#insults').text() * 1 + 1);
            }
        });
    });
});