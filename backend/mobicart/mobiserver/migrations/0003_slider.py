# Generated by Django 4.0 on 2024-11-28 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mobiserver', '0002_alter_user_email_alter_user_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.FileField(upload_to='sliders/')),
            ],
        ),
    ]
