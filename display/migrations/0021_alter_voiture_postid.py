# Generated by Django 3.2.6 on 2021-09-25 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('display', '0020_alter_voiture_postid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voiture',
            name='postid',
            field=models.TextField(null=True, unique=True),
        ),
    ]