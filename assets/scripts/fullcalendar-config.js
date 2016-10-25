$(document).ready(function() {
    $('#calendar').fullCalendar({
        locale: 'es',
        contentHeight: 700,
        aspectRatio: 2,
        googleCalendarApiKey: 'AIzaSyDoIHaVJIx04wq-XYIkxn4U4dY55Cq3gHw',
        eventSources: [
            {
                googleCalendarId: 'valencia6x@gmail.com',
                className: 'single-event'
            },
            {
                googleCalendarId: 'es.ve#holiday@group.v.calendar.google.com',
                className: 've-holidays'
            },
            {
                googleCalendarId: 'es.christian#holiday@group.v.calendar.google.com',
                className: 'christian-holidays'
            },
            {
                googleCalendarId: '59m851vonq18cqvqctubi7l0p4@group.calendar.google.com',
                className: 'event-birthday'
            },
            {
                googleCalendarId: '7tcitlj1iq6rhiich0il49n95k@group.calendar.google.com',
                className: 'event-wedding'
            },
            {
                googleCalendarId: 'lhhgcjsfvtfd6c9tnui5i66in0@group.calendar.google.com',
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
});