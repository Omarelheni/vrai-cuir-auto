# Generated by Django 3.2.6 on 2022-09-09 13:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0021_alter_voiture_postid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voiture',
            name='marque',
            field=models.ForeignKey(default='notdefined', on_delete=django.db.models.deletion.CASCADE, to='display.marque'),
        ),
    ]