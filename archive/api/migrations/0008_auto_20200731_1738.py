# Generated by Django 3.0.7 on 2020-07-31 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20200730_0757'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mentorprofile',
            name='personal_email',
            field=models.EmailField(blank=True, max_length=60, null=True, verbose_name='personal email'),
        ),
    ]
