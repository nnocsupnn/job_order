# Generated by Django 2.0.1 on 2018-02-24 03:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_order_sys', '0009_auto_20180224_1047'),
    ]

    operations = [
        migrations.AddField(
            model_name='job_table',
            name='jo_attendum',
            field=models.CharField(default='0', max_length=100),
        ),
        migrations.AlterField(
            model_name='comments',
            name='comment_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 2, 24, 11, 21, 33, 100345)),
        ),
    ]
