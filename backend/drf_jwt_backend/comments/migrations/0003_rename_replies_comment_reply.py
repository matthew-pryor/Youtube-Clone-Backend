# Generated by Django 4.0.3 on 2022-03-17 19:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0002_comment_replies'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='replies',
            new_name='reply',
        ),
    ]
