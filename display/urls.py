from django.urls import path

from . import views

urlpatterns = [
    path("voitures_detail/<int:id>", views.voitures_detail, name='voitures_detail'),
    path("voitures_front/",views.voitures,name='voitures_front'),
    path("coutures_colors/",views.ListCouleurCouture.as_view()),
    path('voitures/',views.LastestVoituresList.as_view()),
    path("colors/",views.ListCouleur.as_view()),
    path("contact/",views.contact_page,name='contact_page'),
    path("accueil/",views.accueil,name='accueil'),
    path("testing/",views.testing,name='testing'),
    path("adding/",views.Adding,name='adding'),
    path("add_colors/",views.get_all_colors_wit_code,name='adding_colors')

]