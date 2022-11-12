from django.db import models

# Create your models here.
from django.db import models
from .MyFileStorage import MyFileStorage
mfs = MyFileStorage()

class Couleur (models.Model):
    code = models.CharField(max_length=200,primary_key=True)
    nom = models.CharField(max_length=254)

    def __str__(self):
        return self.code

class Message (models.Model):
    sujet = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    contenu = models.TextField()

    def __str__(self):
        return self.sujet

class Marque (models.Model):
    nom = models.CharField(max_length=254,primary_key=True)
    image = models.ImageField(null=True,blank=True)

class Matiere (models.Model):
    nom = models.CharField(max_length=254)
    type = models.CharField(max_length=254,blank=True)
    image = models.ImageField(null=True,blank=True)
    code_couleur = models.ForeignKey(Couleur,null=True,related_name='code_couleur',db_column='code_couleur',on_delete=models.SET_NULL)

    class Meta:
        unique_together = ["nom", "code_couleur","type"]


class Voiture (models.Model):
    nom = models.CharField(max_length=254)
    marque = models.ForeignKey(Marque,on_delete=models.CASCADE,default='notdefined')
    postid = models.TextField(unique=True,null=True)
    tableau = models.ManyToManyField(Matiere,blank=True,  related_name='tableau',
    db_column='tableau')
    siege = models.ManyToManyField(Matiere, blank=True, related_name='siege',
    db_column='siege')
    panneau = models.ManyToManyField(Matiere,blank=True,  related_name='panneau',
    db_column='panneau')
    volant = models.ManyToManyField(Matiere,blank=True,  related_name='volant',
    db_column='volant')
    thumbnail = models.ForeignKey('ImageVoiture',blank=True, null=True,related_name='thumbnail', on_delete=models.SET_NULL)
    couture = models.CharField(max_length=254,default='')
    code_couture = models.ForeignKey(Couleur,null=True,related_name='code_couture',db_column='code_couture',on_delete=models.SET_NULL)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.nom

class ImageVoiture(models.Model):
    image = models.FileField(upload_to='images/',storage=mfs)
    voiture = models.ForeignKey(Voiture,on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return self.image.name


