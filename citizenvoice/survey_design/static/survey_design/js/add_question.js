$(document).ready(
    function() {
        let button_add_question = $('#sidebar-left-button-add-question')
        button_add_question.on("click", function(event) {
            $("#ajax-container-map-sidebar").children('div').each(
                function() {
                    $(this).css("visibility", "hidden")
                }
            );
            openSidebar()
            $('#ajax-container-map-sidebar .question_types').css("visibility", "visible")
        });
    }
);
