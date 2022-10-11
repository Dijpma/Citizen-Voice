
# Generated by Django 4.1 on 2022-09-19 14:05



from django.conf import settings
import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Answer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(verbose_name="Creation date")),
                ("updated", models.DateTimeField(verbose_name="Last edited")),
                ("body", models.TextField(verbose_name="Answer Body")),
                ("lon", models.FloatField()),
                ("lat", models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name="Survey",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(max_length=150, verbose_name="Name of the survey"),
                ),
                ("description", models.TextField(verbose_name="Description")),
                (
                    "is_published",
                    models.BooleanField(
                        default=False,
                        verbose_name="Survey is visible and accessible to users",
                    ),
                ),
                (
                    "need_logged_user",
                    models.BooleanField(
                        default=True,
                        verbose_name="Only authenticated users have access to this survey",
                    ),
                ),
                (
                    "editable_answers",
                    models.BooleanField(
                        default=False,
                        verbose_name="Answers can be edited after submission",
                    ),
                ),
                (
                    "display_method",
                    models.SmallIntegerField(verbose_name="Display method"),
                ),
                ("template", models.CharField(max_length=150)),
                (
                    "publish_date",
                    models.DateTimeField(
                        verbose_name="Date that survey was made available"
                    ),
                ),
                (
                    "expire_date",
                    models.DateTimeField(verbose_name="Expiry date of survey"),
                ),
                (
                    "redirect_url",
                    models.CharField(max_length=150, verbose_name="Redirect URL"),
                ),
                (
                    "designer",
                    models.ForeignKey(
                        default=1,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Response",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    models.DateTimeField(verbose_name="Date response was submitted"),
                ),
                ("updated", models.DateTimeField(verbose_name="Last edit")),
                (
                    "interview_uuid",
                    models.CharField(
                        max_length=150, verbose_name="Unique ID of interview"
                    ),
                ),
                (
                    "survey",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="apiapp.survey"
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("text", models.TextField(verbose_name="Text of the Question")),
                (
                    "order",
                    models.IntegerField(
                        verbose_name="Order of where question is placed"
                    ),
                ),
                (
                    "required",
                    models.BooleanField(
                        default=False, verbose_name="Question must be filled out"
                    ),
                ),
                (
                    "question_type",
                    models.CharField(
                        choices=[
                            ("text", "text (multiple line)"),
                            ("short-text", "short text (one line)"),
                            ("radio", "radio"),
                            ("select", "select"),
                            ("select-multiple", "Select Multiple"),
                            ("select_image", "Select Image"),
                            ("integer", "integer"),
                            ("float", "float"),
                            ("date", "date"),
                            ("geospatial", "geospatial"),
                        ],
                        default="text",
                        max_length=150,
                        verbose_name="Type of question",
                    ),
                ),
                (
                    "choices",
                    models.TextField(
                        blank=True, null=True, verbose_name="Choices for answers"
                    ),
                ),
                (
                    "survey",
                    models.ForeignKey(
                        default=1,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.survey",
                    ),
                ),
            ],
            options={
                "verbose_name": "question",
                "verbose_name_plural": "questions",
                "ordering": ("survey", "order"),
            },
        ),
        migrations.CreateModel(
            name="PolygonLocation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=100)),
                (
                    "location",
                    django.contrib.gis.db.models.fields.PolygonField(srid=4326),
                ),
                (
                    "answer",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.answer",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.question",
                    ),
                ),
            ],
            options={"abstract": False,},
        ),
        migrations.CreateModel(
            name="PointLocation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=100)),
                ("location", django.contrib.gis.db.models.fields.PointField(srid=4326)),
                (
                    "answer",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.answer",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.question",
                    ),
                ),
            ],
            options={"abstract": False,},
        ),
        migrations.CreateModel(
            name="LineStringLocation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=100)),
                (
                    "location",
                    django.contrib.gis.db.models.fields.LineStringField(srid=4326),
                ),
                (
                    "answer",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.answer",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="apiapp.question",
                    ),
                ),
            ],
            options={"abstract": False,},
        ),
        migrations.AddField(
            model_name="answer",
            name="question",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="apiapp.question"
            ),
        ),
        migrations.AddField(
            model_name="answer",
            name="response",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="apiapp.response"
            ),
        ),
    ]
