<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
    <!-- Bootstrap CSS -->
    <link rel='stylesheet' href='bower_components/bootstrap/dist/css/bootstrap.min.css' />
    <!-- Full Calendar CSS -->
    <link rel='stylesheet' href='bower_components/fullcalendar/dist/fullcalendar.min.css' />
    <!-- Vegas   -->
    <link rel="stylesheet" href="bower_components/vegas/dist/vegas.min.css">
    <link rel='stylesheet' href='assets/styles/style.css' />
    <title>Eventos - HOTEL PLAZA MARU</title>
</head>
<body>
    <header id="header">
        <nav class="navbar navbar-fixed-top">
            <a class="navbar-brand" href="#"><img src="dist/images/hotel_logof.png"></a>
            <ul class="nav navbar-nav pull-xs-right" style="vertical-align: middle;">
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" href="#">Inicio</a></li>
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" href="conoce/habitaciones.php"> Habitaciones</a></li>
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" href="conoce/gastronomia.php">Gastronomia </a></li>
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" href="conoce/bodas.php">Bodas</a></li>
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" href="conoce/eventos.php">Eventos  </a></li>
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" href="conoce/contacto.php">Contactenos  </a></li>
                <li class="nav-item" style="white-space: nowrap;"><a class="nav-link" id="abc" onclick="javascript:reservas(this);" style="cursor:pointer" name="https://www.methacortex.com/rs_plazameru/FRM_1.php?Key=SE9URUwgUExBWkEgTUVSVQ==">Reserve Ahora</a>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <div class="row calendar-container">
            <div class="col-md-12">
                <h1 class="text-center"><i class="fa fa-calendar" aria-hidden="true"></i> Calendario de Eventos</h1>
            </div>
            <!--     Full calendar       -->
            <div class="col-md-12">
                <div id='calendar'></div>
            </div>
            <!--     Events Legends       -->
            <div class="col-md-12 event-button-group">
                <button type="button" class="btn single-event" data-toggle="button" aria-pressed="false" autocomplete="off">Eventos Merú</button>
                <button type="button" class="btn event-birthday" data-toggle="button" aria-pressed="false" autocomplete="off">Cumpleañeros Merú</button>
                <button type="button" class="btn event-wedding" data-toggle="button" aria-pressed="false" autocomplete="off">Plan Noche de Bodas</button>
                <button type="button" class="btn event-executive" data-toggle="button" aria-pressed="false" autocomplete="off">Ejecutivos MOD</button>
                <button type="button" class="btn ve-holidays" data-toggle="button" aria-pressed="false" autocomplete="off">Festivos Venezolanos</button>
                <button type="button" class="btn christian-holidays" data-toggle="button" aria-pressed="false" autocomplete="off">Festivos Cristianos</button>

            </div>
        </div>
        <!-- Event Modal -->
        <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Evento sin título</h4>
                    </div>
                    <div class="modal-body">
                        <div id="eventDescription" class="row" style="display: none;">
                            <div class="col-md-12">
                                <blockquote class="blockquote">
                                    <p id="descriptionContent"></p>
                                </blockquote>
                            </div>
                        </div>
                        <div id="eventDuration" class="row" style="display: none;">
                            <div class="col-md-6">
                                <i class="fa fa-calendar-check-o" aria-hidden="true"></i><strong> Inicio: </strong>
                                <div id="startDate"></div>
                            </div>
                            <div class="col-md-6">
                                <i class="fa fa-calendar-times-o" aria-hidden="true"></i><strong> Fin: </strong>
                                <div id="endDate"></div>
                            </div>
                        </div>
                        <div id="eventDate" class="row" style="display: none;">
                            <div class="col-md-12">
                                <i class="fa fa-calendar" aria-hidden="true"></i><strong> Fecha: </strong>
                                <div id="singleDate"></div>
                            </div>
                        </div>
                        <div id="eventLocation" class="row" style="display: none;">
                            <div class="col-md-12">
                                <i class="fa fa-compass" aria-hidden="true"></i><strong> Lugar: </strong>
                                <div id="locationContent"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/tether/dist/js/tether.min.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bower_components/moment/moment.js"></script>
    <script src="bower_components/fullcalendar/dist/fullcalendar.min.js"></script>
    <script src="bower_components/vegas/dist/vegas.min.js"></script>
    <script src="bower_components/fullcalendar/dist/locale-all.js"></script>
    <script src="bower_components/fullcalendar/dist/gcal.js"></script>
    <script language="javascript" type="text/javascript" src="assets/scripts/config.js"></script>
    <script language="javascript" type="text/javascript" src="assets/scripts/events.js"></script>
    <script language="javascript" type="text/javascript" src="assets/scripts/fullcalendar-config.js"></script>

</body>
</html>