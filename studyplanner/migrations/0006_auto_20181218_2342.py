# Generated by Django 2.1.4 on 2018-12-18 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studyplanner', '0005_method_path'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='method',
            name='path',
        ),
        migrations.AlterField(
            model_name='method',
            name='description',
            field=models.TextField(default=''),
        ),
    ]