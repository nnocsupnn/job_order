# Generated by Django 2.0.1 on 2018-03-19 08:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_order_sys', '0003_auto_20180319_1602'),
    ]

    operations = [
        migrations.RenameField(
            model_name='megaa',
            old_name='jo_pcr',
            new_name='jo_pcr_date_bill',
        ),
        migrations.RenameField(
            model_name='megab',
            old_name='jo_pcr',
            new_name='jo_pcr_date_bill',
        ),
        migrations.AddField(
            model_name='megaa',
            name='jo_pcr_recieve',
            field=models.DateField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='megab',
            name='jo_pcr_recieve',
            field=models.DateField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='comments',
            name='comment_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 3, 19, 16, 7, 58, 843138)),
        ),
    ]