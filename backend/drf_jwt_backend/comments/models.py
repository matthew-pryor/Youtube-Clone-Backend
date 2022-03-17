from django.db import models
from django.contrib.auth.models import User
from replies.models import Reply

# Create your models here.

class Comment(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=999)
    text = models.CharField(max_length=1200)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    replies = models.ForeignKey(Reply, on_delete=models.CASCADE)