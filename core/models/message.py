from django.db import models

class Message (models.Model):
    sujet = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    contenu = models.TextField()

    def __str__(self):
        return self.sujet
