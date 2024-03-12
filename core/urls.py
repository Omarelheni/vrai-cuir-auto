from django.urls import path

from . import views
from django.conf import settings


urlpatterns = [
    path("voitures_detail/<int:id>", views.VoitureDetailView.as_view(), name=settings.VOITURE_DETAIL),
    path("voitures_front/",views.VoitureListFrontView.as_view(),name=settings.VOITURE_FRONT),
    path('voitures/',views.LastestVoituresList.as_view()),
    path("colors/",views.ListCouleur.as_view()),
    path("contact/",views.AddMessageView.as_view(),name=settings.CONTACT_PAGE),
    path("accueil/",views.AccueilView.as_view(),name=settings.ACCUEIL_NAME),

]
