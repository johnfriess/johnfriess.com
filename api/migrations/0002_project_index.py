# Generated by Django 4.0.2 on 2022-11-21 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='index',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]