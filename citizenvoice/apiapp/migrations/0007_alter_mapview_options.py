# Generated by Django 4.1.1 on 2023-02-12 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiapp', '0006_mapview_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mapview',
            name='options',
            field=models.JSONField(default=1),
            preserve_default=False,
        ),
    ]
