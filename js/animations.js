$('#schools_toggle').click(function() {
    $('#schools_toggle').toggleClass('active dvhs');
    $('#WestMEC-SchoolLinks').toggleClass('hidden');
    if ($('#DVHS-SchoolLinks').hasClass('hidden')) {
        $('#DVHS-SchoolLinks').removeClass('hidden')
    } else {
        $('#DVHS-SchoolLinks').addClass('hidden')
    }
    if ($('#section_1').hasClass('WestMEC_Background')) {
        $('#section_1').removeClass('WestMEC_Background').addClass('DVHS_Background');
    } else {
        $('#section_1').removeClass('DVHS_Background').addClass('WestMEC_Background');
    }
});