# Generated by Django 3.2.6 on 2021-08-19 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0002_rename_mail_message_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='voiture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=254)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='image_voiture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='images/')),
                ('voiture', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='display.voiture')),
            ],
        ),
    ]
