
from django.db import models
from .couleur import Couleur

class Matiere (models.Model):
    nom = models.CharField(max_length=254)
    type = models.CharField(max_length=254,blank=True)
    image = models.ImageField(null=True,blank=True)
    code_couleur = models.ForeignKey(Couleur,null=True,related_name='code_couleur',db_column='code_couleur',on_delete=models.SET_NULL)

    class Meta:
        unique_together = ["nom", "code_couleur","type"]
