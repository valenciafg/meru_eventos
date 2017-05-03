$(document).ready(function() {
    $('#calendar').fullCalendar({
        locale: 'es',
        contentHeight: 700,
        aspectRatio: 2,
        googleCalendarApiKey: 'AIzaSyDrzlzwx-cXpWGkvdTA9A4Y_RCAlr7yMe0',
        eventSources: [
            {
                //Actividades Plaza Merú
                googleCalendarId: 'hotelplazameru.com_7vjklt6bgoahjqcdjj46dkr97k@group.calendar.google.com',
                className: 'single-event'
            },
            {
                //Festivos Venezolanos
                googleCalendarId: 'es.ve#holiday@group.v.calendar.google.com',
                className: 've-holidays'
            },
            {
                //Festivos Cristianos
                googleCalendarId: 'es.christian#holiday@group.v.calendar.google.com',
                className: 'christian-holidays'
            },
            {
                //Lunes Bancarios
                googleCalendarId: 'hotelplazameru.com_73u3a4jbirr6eh6b4nvlve7sro@group.calendar.google.com',
                className: 'christian-holidays'
            },
            {
                //Cumpleaños Plaza Marú
                googleCalendarId: 'hotelplazameru.com_fp4rlsjstr7casv20044pabd6k@group.calendar.google.com',
                className: 'event-birthday'
            },
            {
                //Bodas
                googleCalendarId: 'hotelplazameru.com_cuqdhkssdm7e8u02ccnmun6vf0@group.calendar.google.com',
                className: 'event-wedding'
            },
            {
                //Ejecutivos MOD
                googleCalendarId: 'hotelplazameru.com_vpv203etpdor4n9mu8po5o6lto@group.calendar.google.com',
                className: 'event-executive'
            }
        ],
        eventClick: function(calEvent, jsEvent, view) {
            showEventDetailsModal(calEvent);
            if (calEvent.url) {
                return false;
            }
        }
    });
    console.log('asdasdsada');
    var times = $(".fc-event-container");
    console.log('la cantidad de times es',times.length);
});