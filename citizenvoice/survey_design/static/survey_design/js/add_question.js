$(document).ready(
    function() {
        let button_add_survey = $('#sidebar-left-button-add-question')
        button_add_survey.on("click", function(event) {
            $('#ajax-container-map-sidebar .sidebar-survey-form').css("visibility", "hidden")
            openSidebar()
            $('#ajax-container-map-sidebar .question_types').css("visibility", "visible")
        });
    }
);
