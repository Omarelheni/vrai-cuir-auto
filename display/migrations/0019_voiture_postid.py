# Generated by Django 3.2.6 on 2021-09-25 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0018_voiture_code_couture'),
    ]

    operations = [
        migrations.AddField(
            model_name='voiture',
            name='postid',
            field=models.IntegerField(null=True, unique=True),
        ),
    ]
