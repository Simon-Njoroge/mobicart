# Generated by Django 4.0 on 2024-12-06 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mobiserver', '0004_alter_user_created_at_alter_user_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='price',
            field=models.DecimalField(decimal_places=2, default=False, max_digits=10),
        ),
    ]
