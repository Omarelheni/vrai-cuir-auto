from rest_framework import generics
from rest_framework.response import Response
from ..serializers import MessageSerializer
from django.views.generic import TemplateView
from django.shortcuts import redirect
from django.conf import settings
from django.urls import reverse
from urllib.parse import urlencode


class AddMessageView(TemplateView,generics.CreateAPIView):
    serializer_class = MessageSerializer
    template_name = 'display/contact.html'

    def post(self, request, *args, **kwargs):
        base_url = reverse(settings.ACCUEIL_NAME)
        query_params = {'success': 'Votre message a été envoyé'}

        try:
            super().post(request, *args, **kwargs)
        except Exception :
            query_params = {'failure': "Echec à l'envoye du message"}

        url = '{}?{}'.format(base_url, urlencode(query_params))
        return redirect(url)