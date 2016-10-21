$(document).ready(function(){
    function showEventDetailsModal(event){
        var gMapSearchBasePathES = "https://maps.google.com/maps?hl=es&q=";
        console.log(event);
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
});
