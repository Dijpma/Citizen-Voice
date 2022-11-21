 $(document).ready(
    function() {
    $('.btn-sidebar-question-type').each(function() {
        var type_button_id = $(this).attr('id');
        type_button_id = type_button_id.replace(/\s/g , "-");
        $(this).on("click", function(event){
            event.preventDefault();
            $("#ajax-container-map-sidebar").children('div').each(
                function() {
                    $(this).css("visibility", "hidden")
                }
            );
            $("#question-type-"+type_button_id).css("visibility", "visible")
        });
    });
    $("#btn-select-add-option").on("click", function(event) {
        event.preventDefault();
        $("#form-item-question-type-select-option").append("<input type=\"text\" class=\"form-control margin-top-5pc\" id=\"exampleInputPassword1\" placeholder=\"option\">");
    });

//        var AddQuestionOfType = function() {
//            var current
//            var currentType = new()
//
//            this.addQuestion = function() {
//                currentType.addQuestion()
//            }
//        }
//
//        var openQuestion = function() {
//
//        }
});