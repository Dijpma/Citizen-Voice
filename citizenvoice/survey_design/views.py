from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from apiapp.views import SurveyViewSet, QuestionViewSet
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from django.utils.timezone import now

from .forms import SurveyCreationForm
# from .models import Question, Survey


# Create your views here.


def index(request):
    form = UserCreationForm()
    return render(request, 'survey_design/index.html')


@login_required
def survey(request):
    context = {
        'title': 'Survey Design',
        # 'surveys': SurveyViewSet.GetSurveys(),
        # TODO: Replace with api variant
        'surveys': User.objects.get(id=request.user.id).survey_set.all(),
    }
    return render(request, 'survey_design/survey.html', context)


@login_required
def survey_detail(request, survey_id):
    context = {
        'title': 'Survey Design',
        'surveys': User.objects.get(id=request.user.id).survey_set.all(),
        'survey_id': survey_id
    }
    try:
        context['survey_to_display'] = SurveyViewSet.GetSurvey(survey_id)[0]
        context['questions_of_survey'] = QuestionViewSet.GetQuestionsFromSurvey(survey_id)
    except Exception as e:
        # Survey.DoesNotExist
        # pass for now, we might add some warning in the future
        raise e
    return render(request, 'survey_design/survey.html', context)


@login_required
def question_detail(request, survey_id, question_order):
    # TODO Check whether survey_id is owned by currently logged in user
    context = {
        'title': 'Survey Design',
        'surveys': User.objects.get(id=request.user.id).survey_set.all(),
        'survey_id': survey_id
    }
    try:
        context['survey_to_display'] = SurveyViewSet.GetSurvey(survey_id)[0]
        context['question_to_display'] = QuestionViewSet.GetOrderedQuestionFromSurvey(survey_id, question_order)[0]

        if context['survey_to_display'].question_count() > question_order:
            context['next_question_order'] = question_order + 1

    except Exception as e:
        # Survey.DoesNotExist
        # pass for now, we might add some warning in the future
        raise e
    return render(request, 'survey_design/survey.html', context)


@login_required
def survey_create(request):
    if request.method == 'POST':
        form = SurveyCreationForm(request.POST)
    else:
        form = SurveyCreationForm()
        pass
    return save_survey_form(request, form, 'survey_design/survey.html')


def save_survey_form(request, form, template):
    data = dict()
    if request.method == 'POST':
        if form.is_valid():
            # TODO: override form.is_valid to autofill gaps
            survey_obj = form.save(commit=False)
            survey_obj.display_method = 1
            survey_obj.publish_date = now()
            survey_obj.expire_date = now()
            survey_obj.author_id = request.user.id
            survey_obj.save()
            # form.save()
            data['form_is_valid'] = True
            print("Form Is Valid")
        else:
            # TODO: handle else case of form validation
            data['form_is_valid'] = False
            print("Form Not Valid")
            print(form.errors)

    context = {'form': form}
    data['html-form'] = render_to_string(template, context, request=request)
    return JsonResponse(data)
