from .models import Voiture, Matiere, Marque, ImageVoiture, Couleur, Message
from rest_framework import serializers


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Couleur
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class MatiereSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matiere
        fields = ['nom','code_couleur','type']


class MarqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marque
        fields = ['nom']

class VoituresImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageVoiture
        fields = ['image']

class VoitureSerializer(serializers.ModelSerializer):
    siege = MatiereSerializer(many=True)
    panneau = MatiereSerializer(many=True)
    tableau = MatiereSerializer(many=True)
    volant = MatiereSerializer(many=True)
    marque = MarqueSerializer()
    thumbnail = serializers.StringRelatedField(read_only=True)
    images = serializers.StringRelatedField(many=True,read_only=True)

    class Meta :
        model = Voiture
        fields = ['id','nom','siege','panneau','tableau','volant','marque','couture','images','thumbnail']