//import * as superHeroes from './ajax-survey.js';
import { test } from "./ajax";

$(document).ready(
    function() {
        let survey_link_behaviour = function() {
            $(this).on("click", function(event) {
                alert("Survey link select");
                event.preventDefault();
                editForm(this);
            });
        }

        let saveForm = function () {
            let form = $('#form-survey-create');
            $.ajax({
                url: form.attr("action"),
                data: form.serialize(),
                type: form.attr("method"),
                dataType: 'json',
                success: function (data) {
                    if(data.form_is_valid) {
                        alert("Form is Valid");
                        $('#sidebar-left-survey-list').html(data.html_form);
                        let survey_link = $('.survey-link-select');
                        survey_link.each(survey_link_behaviour);
                    }
                    else {
                        alert("Not Valid")
                    }
                }
            });
        };

//        let updateForm = function () {
//            let form = $('#form-survey-create');
//            $.ajax({
//                url: form.attr("action"),
//                data: form.serialize(),
//                type: form.attr("method"),
//                dataType: 'json',
//                success: function (data) {
//                    if(data.form_is_valid) {
//                        alert("Form is Valid");
//                        $('#sidebar-left-survey-list').html(data.html_form);
//                        let survey_link = $('.survey-link-select');
//                        survey_link.each(survey_link_behaviour);
//                    }
//                    else {
//                        alert("Not Valid")
//                    }
//                }
//            });
//        };

        let editForm = function (selected_link) {
            let survey_link = $(selected_link);
            $.ajax({
                url: survey_link.attr("href"),
                data: {},
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    if(data.data_exists) {
                        alert("Data exists")
                        $('#ajax-container-map-sidebar').html(data.html_form)

                        let button_survey_update = $('#form-survey-update-submit')
                        button_survey_update.on("click", function(event) {
                            event.preventDefault();
                            alert("Clicked update button");
                        });
                    }
                    else {
                    }
                }
            });
        };

        let form_submit = $('#form-survey-create-submit')
        form_submit.on("click", function(event){
            event.preventDefault();
            alert("clicked");
            saveForm();
        });

        let button_add_survey = $('#sidebar-left-survey-add')
        button_add_survey.on("click", function(event) {
            alert("Clicked add button")
        });

        let survey_link = $('.survey-link-select');
        survey_link.each(survey_link_behaviour);

        test()
    }
);



$(function() {


    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
    alert("CSRFTOKEN");
    alert(csrftoken);
    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});