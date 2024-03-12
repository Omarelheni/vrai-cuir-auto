
from django.core.paginator import Paginator
from rest_framework.views import APIView
from rest_framework.response import Response
from core.models import Couleur
from core.serializers import VoitureSerializer,ColorSerializer
from core.models import Voiture
from django.views.generic import TemplateView
from rest_framework import generics


class VoitureListFrontView(TemplateView):
    template_name = 'display/voitures.html'

class VoitureDetailView(TemplateView):
    template_name = 'display/product-details.html'
    def get_context_data(self,**kwargs):
        context = super().get_context_data(**kwargs)
        id = int(kwargs.get('id'))
        context['voiture'] = Voiture.objects.get(id=id)
        context['voitures'] = Voiture.objects.filter(marque=context['voiture'].marque)[:5]
        return context


from rest_framework import generics


class LastestVoituresList(generics.ListCreateAPIView):
    serializer_class = VoitureSerializer
    pagination_class = Paginator
    queryset = Voiture.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        nom = self.request.GET.get('nom', '')
        marque = self.request.GET.get('marque', '')

        if nom:
            queryset = queryset.filter(nom__contains=nom)
        if marque:
            queryset = queryset.filter(marque__nom=marque)

        return queryset.distinct()

    def post(self, request, *args, **kwargs):
        details = request.data.get('details', {})
        queryset = self.get_queryset()

        for key, value in details.items():
            if key in ['Siege', 'Panneaux', 'Tableaux', 'Volant']:
                for item in value:
                    queryset = queryset.filter(**{
                        f"{key.lower()}__nom": item.get('cuir'),
                        f"{key.lower()}__code_couleur": item.get('color')
                    }).distinct()
            elif key == 'Couture' and value:
                queryset = queryset.filter(code_couture=value).distinct()

        serializer = self.get_serializer(queryset, many=True)
        return Response({'data': serializer.data, 'count': len(serializer.data)})


class ListCouleur(generics.ListAPIView):
    serializer_class = ColorSerializer  # Replace with your serializer class
    queryset = Couleur.objects.all()


