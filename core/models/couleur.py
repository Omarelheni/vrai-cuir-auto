from django.db import models
class Couleur (models.Model):
    code = models.CharField(max_length=200,primary_key=True)
    nom = models.CharField(max_length=254)

    def __str__(self):
        return self.code