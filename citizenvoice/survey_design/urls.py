from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='survey-design-index'),
    path('survey', views.survey, name='survey-home'),
    path('survey/<int:survey_id>/', views.survey_edit, name='survey-edit'),
    path('survey/question/<int:question_id>/', views.question_edit, name='question-edit'),
    path('survey/create', views.survey_create, name='survey_create'),
    path('survey/update/<int:survey_id>/', views.survey_update, name='survey_update')
]
