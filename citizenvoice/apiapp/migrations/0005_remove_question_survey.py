# Generated by Django 4.0.6 on 2022-08-24 11:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiapp', '0004_alter_question_survey'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='survey',
        ),
    ]
