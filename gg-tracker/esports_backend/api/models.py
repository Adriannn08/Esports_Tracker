from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    rank = models.IntegerField()

    def __str__(self):
        return self.name
