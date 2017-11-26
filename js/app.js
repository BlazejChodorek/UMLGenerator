$(document).ready(function () {
    $('#examplesHelloWorld').on('click', function(event) {
        event.preventDefault();
        helloWorld(document.getElementById('graphContainer'));
    });

});

