
# Create your models here.
from django.db import models
from core.MyFileStorage import MyFileStorage
from .couleur import Couleur
from .matiere import Matiere

mfs = MyFileStorage()

class Marque (models.Model):
    nom = models.CharField(max_length=254,primary_key=True)
    image = models.ImageField(null=True,blank=True)
    def __str__(self):
        return self.nom



class Voiture (models.Model):
    nom = models.CharField(max_length=250)
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
    image = models.FileField(upload_to='images/')
    voiture = models.ForeignKey(Voiture,on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return self.image.name


