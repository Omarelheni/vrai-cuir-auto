# Generated by Django 3.2.6 on 2021-09-13 10:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0017_auto_20210908_1553'),
    ]

    operations = [
        migrations.AddField(
            model_name='voiture',
            name='code_couture',
            field=models.ForeignKey(db_column='code_couture', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='code_couture', to='display.couleur'),
        ),
    ]