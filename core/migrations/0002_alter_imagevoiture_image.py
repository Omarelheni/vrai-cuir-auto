# Generated by Django 3.2.6 on 2024-03-08 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagevoiture',
            name='image',
            field=models.FileField(upload_to='images/'),
        ),
    ]
