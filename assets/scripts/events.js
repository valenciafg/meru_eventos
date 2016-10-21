$(document).ready(function(){
    function showEventDetailsModal(event){
        var gMapSearchBasePathES = "https://maps.google.com/maps?hl=es&q=";
        // console.log(event);
        //Title
        if(typeof event.title != 'undefined'){
            $("#myModalLabel").html(event.title);
        }else{
            $("#myModalLabel").html('Evento sin título');
        }
        //Description
        if(typeof event.description != 'undefined'){
            $("#descriptionContent").html(event.description);
            $("#eventDescription").show();
        }else{
            $("#eventDescription").hide();
        }
        //Location
        if(typeof event.location != 'undefined'){
            var formatedLocation = event.location.replace(/ /g, "+");
            var mapUrl = gMapSearchBasePathES+formatedLocation;
            var mapLink = "<a href='"+mapUrl+"' target='_blank'>"+'(Ver mapa)'+"</a>";
            $("#locationContent").html(event.location+' '+mapLink);
            $("#eventLocation").show();
        }else{
            $("#eventLocation").hide();
        }
        //Dates
        var duration = moment.duration(event.end.diff(event.start));
        var durationHours = duration.asHours();
        if(durationHours === 24){
            $("#singleDate").html(event.start.format('DD/MM/YYYY'));
            $('#eventDate').show();
            $('#eventDuration').hide();
        }else{
            $('#eventDate').hide();
            $('#startDate').html(event.start.format('DD/MM/YYYY hh:mm A'));
            $('#endDate').html(event.end.format('DD/MM/YYYY hh:mm A'));
            $('#eventDuration').show();
        }
        $('#eventModal').modal('show');
    }
    window.showEventDetailsModal = showEventDetailsModal;
    var show_single_event = true;
    $(".btn.single-event").click(function(){
        if(show_single_event) {
            $(".fc-event.single-event").hide();
            show_single_event = false;
        }else {
            $(".fc-event.single-event").show();
            show_single_event = true;
        }
    });
    var show_ve_holidays_event = true;
    $(".btn.ve-holidays").click(function(){
        if(show_ve_holidays_event) {
            $(".fc-event.ve-holidays").hide();
            show_ve_holidays_event = false;
        }else {
            $(".fc-event.ve-holidays").show();
            show_ve_holidays_event = true;
        }
    });
    var show_christian_event = true;
    $(".btn.christian-holidays").click(function(){
        if(show_christian_event) {
            $(".fc-event.christian-holidays").hide();
            show_christian_event = false;
        }else {
            $(".fc-event.christian-holidays").show();
            show_christian_event = true;
        }
    });
    var show_birthday_event = true;
    $(".btn.event-birthday").click(function(){
        if(show_birthday_event) {
            $(".fc-event.event-birthday").hide();
            show_birthday_event = false;
        }else {
            $(".fc-event.event-birthday").show();
            show_birthday_event = true;
        }
    });
    var show_wedding_event = true;
    $(".btn.event-wedding").click(function(){
        if(show_wedding_event) {
            $(".fc-event.event-wedding").hide();
            show_wedding_event = false;
        }else {
            $(".fc-event.event-wedding").show();
            show_wedding_event = true;
        }
    });
    var show_executive_event = true;
    $(".btn.event-executive").click(function(){
        if(show_executive_event) {
            $(".fc-event.event-executive").hide();
            show_executive_event = false;
        }else {
            $(".fc-event.event-executive").show();
            show_executive_event = true;
        }
    });
});
