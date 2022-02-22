$('#schools_toggle').click(function() {
    $('#schools_toggle').toggleClass('active dvhs');
    $('#WestMEC-SchoolLinks').toggleClass('hidden');
    if ($('#DVHS-SchoolLinks').hasClass('hidden')) {
        $('#DVHS-SchoolLinks').removeClass('hidden')
    } else {
        $('#DVHS-SchoolLinks').addClass('hidden')
    }
});