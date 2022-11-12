# Generated by Django 3.2.6 on 2021-09-06 17:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0015_alter_imagevoiture_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='voiture',
            name='thumbnail',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='thumbnail', to='display.imagevoiture'),
        ),
        migrations.AlterField(
            model_name='imagevoiture',
            name='voiture',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='display.voiture'),
        ),
    ]