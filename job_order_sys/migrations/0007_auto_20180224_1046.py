# Generated by Django 2.0.1 on 2018-02-24 02:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_order_sys', '0006_auto_20180224_1045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='comment_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 2, 24, 10, 46, 24, 557938)),
        ),
    ]
