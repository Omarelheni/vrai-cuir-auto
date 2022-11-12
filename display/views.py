import copy

from django.db.models import Count
from django.shortcuts import render

from .forms import MessageRegistration
from .serializers import VoitureSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.paginator import Paginator
from .models import Voiture, ImageVoiture, Couleur, Matiere, Marque

from django.core.paginator import Paginator
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Voiture, ImageVoiture, Couleur

from django.shortcuts import render

from .serializers import VoitureSerializer
from os.path import exists


import copy
import difflib
import time

import numpy
from django.core.files import File

from django.shortcuts import render
import random
from datetime import datetime
from .cuir_voiture import CuirVoiture
from .forms import MessageRegistration
from bs4 import BeautifulSoup
import  requests
# Create your views here.
from django.http import HttpResponse
import facebook as fb
import json
from .car_brands import brands
import  shlex

from .models import Voiture, Marque, Matiere, ImageVoiture
from .voiture_models import models_w, models_r, models_rov
import re

import unicodedata

def get_all_colors_wit_code(request):

    html_text = requests.get('http://www.ludowalsh.com/HTM/Liste_de_couleurs.htm')
    soup = BeautifulSoup(html_text.content, 'html.parser')
    list = []
    list_couleur = soup.findAll('a', class_='new')
    for i in list_couleur:
        td = i.parent
        next_td_tag = td.findNext('td')
        color = Couleur(code=next_td_tag.attrs.get("bgcolor"),nom=i.text)
        color.save()
    return HttpResponse(list_couleur)



def get_all_colors():
    html_text = requests.get('https://www.listedemots.com/liste-couleurs')
    soup = BeautifulSoup(html_text.content, 'lxml')
    list = []
    list_couleur = soup.findAll('span', class_='mot')
    for i in list_couleur:
        list.append(i.text)
    return list

def in_colors(color_t):
    list_colors = get_all_colors()
    for color in list_colors:
        score = difflib.SequenceMatcher(None, color_t.upper(), color.upper()).ratio()
        if (score > 0.8):
            return color
    return ''


def is_same(word, word1):
    score = difflib.SequenceMatcher(None, word.upper(), word1.upper()).ratio()
    if (score > 0.8):
        return True
    return False


def is_volkswagen(word):
    car = difflib.get_close_matches(word.upper(), models_w)
    score = 0
    if len(car) > 0:
        score = difflib.SequenceMatcher(None, word.upper(), car[0]).ratio()
        if (score > 0.8):
            return [True, score]
    return [False, score]


def is_renault(word):
    if (word == "Megan"):
        car = difflib.get_close_matches(word.upper(), models_r)
    car = difflib.get_close_matches(word.upper(), models_r)
    score = 0
    if len(car) > 0:
        score = difflib.SequenceMatcher(None, word.upper(), car[0]).ratio()
        if (score > 0.8):
            return [True, score]
    return [False, score]


def is_rover(word):
    car = difflib.get_close_matches(word.upper(), models_rov)
    score = 0
    if len(car) > 0:
        score = difflib.SequenceMatcher(None, word.upper(), car[0]).ratio()
        if (score > 0.8):
            return [True, score]
        elif (difflib.SequenceMatcher(None, word.upper(), 'LAND').ratio() > 0.9):
            return [True, 0.9]

    return [False, score]


def convert(string):
    li = list(string.split(" "))
    return li


def get_the_car(paragraphe):
    marque_nom_score = ['', '', 0.0]
    sentences = into_sentences(paragraphe)
    for sentence in sentences:
        list_word = convert(sentence)
        score = 0
        for i, word in enumerate(list_word):
            word = re.sub('[#|-]', '', word)
            car = difflib.get_close_matches(word.upper(), brands)
            access = False

            if len(car) > 0:
                car_index = word.upper().find((car[0]).upper())
                if (car_index != -1):
                    car_index += len(car[0])
                    list_word[i] = word[:car_index]
                    list_word.insert(i, word[car_index:])
                    word = word[:car_index]

            if (is_volkswagen(word)[0]):
                marque_nom_score[0] = "VOLKSWAGEN"
                marque_nom_score[2] = is_volkswagen(word)[1]
                while (i < len(list_word) and list_word[i] != str('🔥')):
                    marque_nom_score[1] += ' ' + (list_word[i]).upper()
                    i += 1
                break

            if (is_rover(word)[0]):
                marque_nom_score[0] = "LAND ROVER"
                marque_nom_score[2] = is_rover(word)[1]
                while (i < len(list_word) and list_word[i] != str('🔥')):
                    marque_nom_score[1] += ' ' + (list_word[i]).upper()
                    i += 1
                break
            elif ((word.upper()).find('LAND') != -1):
                print(word, list_word[i + 1])
                if (list_word[i + 1].upper().find('ROVER') != -1):
                    marque_nom_score[0] = "LAND ROVER"
                    marque_nom_score[2] = 1
                    while (i < len(list_word) and list_word[i] != str('🔥')):
                        marque_nom_score[1] += ' ' + (list_word[i]).upper()
                        i += 1
                    break

            if (is_renault(word)[0]):
                marque_nom_score[0] = "RENAULT"
                marque_nom_score[2] = is_renault(word)[1]
                while (i < len(list_word) and list_word[i] != str('🔥')):
                    marque_nom_score[1] += ' ' + (list_word[i]).upper()
                    i += 1
                break

            if len(car) > 0:

                if (car[0] == 'MERCEDES-BENZ'.upper()):
                    car[0] = 'MERCEDES'

                score = difflib.SequenceMatcher(None, word.upper(), car[0]).ratio()

                if (score > 0.8):
                    marque_nom_score[0] = car[0]
                    marque_nom_score[2] = score

                    while (i < len(list_word) and list_word[i] != str('🔥')):
                        marque_nom_score[1] += ' ' + (list_word[i]).upper()
                        i += 1
                    break
                marque_nom_score[1] = re.sub('[#|-|\n]', '', marque_nom_score[1])
                marque_nom_score[1] = marque_nom_score[1][1:]
                return [marque_nom_score[0], marque_nom_score[1]]
    return ['', '']


def into_sentences(text):
    list = text.splitlines()
    return (list)


def get_siege(message):
    sentences = into_sentences(message)
    Siege = []
    done = False
    types = ['Perforé', 'Lisse']
    for sentence in sentences:
        list_sentence = convert(sentence)
        for word in list_sentence:
            nk = unicodedata.normalize('NFKD', word)
            word = (nk.encode('ASCII', 'ignore')).decode("utf-8")
            if (word.upper() == 'SIEGE' and word.find('#') == -1):
                for word in list_sentence:
                    if (word.upper().find('SIMILI') != -1):
                        Siege.append(CuirVoiture('Simili-cuir', '', ''))

                    if (is_same(word, 'cuir')):
                        Siege.append(CuirVoiture('Vrai Cuir', '', ''))

                    if (in_colors(word) != ''):
                        if (Siege == []):
                            Siege.append(CuirVoiture('Vrai Cuir', '', ''))
                        Siege[-1].color = in_colors(word)
                        Siege[-1].type = ''

                    for type in types:
                        if (is_same(word, type)):
                            Siege[-1].type = type

                    if (word.upper() == 'ET' or word.upper() == '&'):
                        if (len(Siege) > 0):
                            Siege.append(copy.deepcopy(Siege[-1]))
                return Siege

    return Siege


def get_panneau(message):
    sentences = into_sentences(message)
    Panneau = []
    types = ['Perforé', 'Lisse']
    for sentence in sentences:
        list_sentence = convert(sentence)
        for word in list_sentence:
            if (is_same(word, 'panneaux') and word.find('#') == -1):
                for word in list_sentence:
                    if (word.upper().find('SIMILI') != -1):
                        Panneau.append(CuirVoiture('Simili-cuir', '', ''))

                    if (is_same(word, 'cuir')):
                        Panneau.append(CuirVoiture('Vrai Cuir', '', ''))

                    if (in_colors(word) != ''):
                        if (Panneau == []):
                            Panneau.append(CuirVoiture('Vrai Cuir', '', ''))
                        Panneau[-1].color = in_colors(word)
                        Panneau[-1].type = ''

                    for type in types:
                        if (is_same(word, type)):
                            if (Panneau == []):
                                Panneau.append(CuirVoiture('Vrai Cuir', '', ''))
                            Panneau[-1].type = type

                    if (word.upper() == 'ET' or word.upper() == '&'):
                        if (len(Panneau) > 0):
                            Panneau.append(copy.deepcopy(Panneau[-1]))
                return Panneau

    return Panneau


def get_tableau(message):
    sentences = into_sentences(message)
    Tableau = []
    types = ['Perforé', 'Lisse']
    for sentence in sentences:
        list_sentence = convert(sentence)
        for word in list_sentence:
            if (is_same(word, 'tableaux') and word.find('#') == -1):
                for word in list_sentence:
                    if (word.upper().find('SIMILI') != -1):
                        Tableau.append(CuirVoiture('Simili-cuir', '', ''))

                    if (is_same(word, 'cuir')):
                        Tableau.append(CuirVoiture('Vrai Cuir', '', ''))

                    if (in_colors(word) != ''):
                        if Tableau == []:
                            Tableau.append(CuirVoiture('Vrai Cuir', '', ''))
                        Tableau[-1].color = in_colors(word)
                        Tableau[-1].type = ''

                    for type in types:
                        if (is_same(word, type)):
                            if Tableau == []:
                                Tableau.append(CuirVoiture('Vrai Cuir', '', ''))
                            Tableau[-1].type = type

                    if (word.upper() == 'ET' or word.upper() == '&'):
                        if (len(Tableau) > 0):
                            Tableau.append(copy.deepcopy(Tableau[-1]))
                return Tableau
    return Tableau


def get_volant(message):
    sentences = into_sentences(message)
    Volant = []
    types = ['Perforé', 'Lisse']
    for sentence in sentences:
        list_sentence = convert(sentence)
        for word in list_sentence:
            if (is_same(word, 'volant') and word.find('#') == -1):
                for word in list_sentence:
                    if (word.upper().find('SIMILI') != -1):
                        Volant.append(CuirVoiture('Simili-cuir', '', ''))

                    if (is_same(word, 'cuir')):
                        Volant.append(CuirVoiture('Vrai Cuir', '', ''))

                    if (in_colors(word) != ''):
                        Volant[-1].color = in_colors(word)
                        Volant[-1].type = ''

                    for type in types:
                        if (is_same(word, type)):
                            Volant[-1].type = type

                    if (word.upper() == 'ET' or word.upper() == '&'):
                        if (len(Volant) > 0):
                            Volant.append(copy.deepcopy(Volant[-1]))
                return Volant
    return Volant


def double_couture(message):
    sentences = into_sentences(message)
    for sentence in sentences:
        list_sentence = convert(sentence)
        for word in list_sentence:
            if (is_same(word, 'couture') and word.find('#') == -1):
                for word in list_sentence:
                    if (in_colors(word) != ''):
                        return in_colors(word)
    return ''
'''
def Update_Cars(request):
    i=0
    id = 400
    html_text = requests.get(
        "https://graph.facebook.com/v11.0/319795044705680/posts?fields=message%2Cattachments%7Bmedia%2Csubattachments%7D&access_token=EAAVOkW18ybgBAPfOErhKL8JOZA9U8WLVh9SInui5SJ9WsjIP43napMnkTzXXbSTeFxkptwmH8ipKtAcqRySDZCbyyH9gDKZAmRZCf7u4aXMMvebZAsX3Mh2lXxmrgZAqnHxImg9LZAsJ2bqoa4JomZBsqeEOvlgC07JZCn1VOuL7yWZApGZAizednFc7F8IBhBXl3i9AtyF7o5AVMob9shYZCugkJa58N5Nw3B0ZD")
    json_posts = json.loads(html_text.content)
    while ('next' in json_posts['paging'] ):
        url_posts = json_posts['paging']['next']

        if ('data' in json_posts):
            for post in json_posts['data']:
                if "message" in post:
                    car = get_the_car(post['message'])
                    if ((car[0] != '') and (car[1] != '')):
                        if (i > 2):
                            id = 396 + i
                            try:
                                voiture = Voiture.objects.get(id=id)
                            except:
                                voiture = None

                            if (voiture != None):
                                voiture.postid = post['id']
                                voiture.save()
                        i += 1
        html_text = requests.get(url_posts)
        json_posts = json.loads(html_text.content)

    return HttpResponse(json_posts)
'''

def Adding(request):
    html_text = requests.get(
        "https://graph.facebook.com/v11.0/319795044705680/posts?fields=message%2Cattachments%7Bmedia%2Csubattachments%7D&access_token=EAAVOkW18ybgBAEVlogkVhcBNNxDkti8WsJwKlnpnmdatUUsGUDfXZAHpTUN1uS3TLljXkJnW54M2wsAuaCu6rUa4brVF4y5mZC8APZC6yQByV98KA5tT4a2Pmwb0hP8o4i2UxIOCP2imd6wRpIYhsUskG7sBvmg5IEp1JJyU7mBG9vrdPE5xbr82F3g1hZBa6sighkRzco5SYr58hcNuGLRRfgcInRwZD")
    json_posts = json.loads(html_text.content)
    while ('next' in json_posts['paging'] ):
        url_posts = json_posts['paging']['next']
        brand_list = []
        images = []
        test = True
        if ('data' in json_posts):
            for post in json_posts['data']:
                if "message" in post:
                    id = post['id']
                    try:
                        voit = Voiture.objects.get(postid=id)
                    except:
                        voit = None

                    if (voit != None):
                        continue

                    car = get_the_car(post['message'])

                    voiture = Voiture()

                    if ((car[0] != '') and (car[1] != '')):
                        marque, _ = Marque.objects.get_or_create(nom=car[0])
                        voiture = Voiture(nom=car[1], marque=marque,postid=id)
                        print(car)

                        voiture.save()
                    else:
                        print('There s no car here')

                        continue
                    if ('attachments' in post):
                        if ('subattachments' in post['attachments']['data'][0]):
                            for media in post['attachments']['data'][0]['subattachments']['data']:
                                image_name = re.sub('[:| |-| .]', '_',
                                                datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f'))
                                res = requests.get(media['media']['image']['src'])
                                if not exists('uploads/images/' + image_name ):
                                    file =  open('uploads/images/' + image_name + '.jpg', 'wb')
                                    file.write(res.content)
                                    file.close()
                                
                                image = ImageVoiture(voiture=voiture)
                                image.image.name = image_name + '.jpg'
                                image.save()
                                file.close()
                        else :
                            voiture.delete()
                            continue
                    else :
                        voiture.delete()
                        continue

                    siege_cuirs = get_siege(post['message'])
                    if (siege_cuirs != []):
                        for cuir in siege_cuirs:
                            try:
                                siege = Matiere.objects.get(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                            except Matiere.DoesNotExist:
                                siege = Matiere(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                                siege.save()
                            voiture.siege.add(siege)

                    panneaux_cuirs = get_panneau(post['message'])
                    if (panneaux_cuirs != []):
                        for cuir in panneaux_cuirs:
                            try:
                                panneau = Matiere.objects.get(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                            except Matiere.DoesNotExist:
                                panneau = Matiere(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                                panneau.save()
                            voiture.panneau.add(panneau)

                    tableau_cuirs = get_tableau(post['message'])
                    if (tableau_cuirs != []):
                        for cuir in tableau_cuirs:
                            try:
                                tableau = Matiere.objects.get(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                            except Matiere.DoesNotExist:
                                tableau = Matiere(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                                tableau.save()
                            voiture.tableau.add(tableau)

                    volant_cuirs = get_volant(post['message'])
                    if (volant_cuirs != []):
                        for cuir in volant_cuirs:
                            try:
                                volant = Matiere.objects.get(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                            except Matiere.DoesNotExist:
                                volant = Matiere(nom=cuir.cuir, code_couleur=nom_to_hex(cuir.color), type=cuir.type)
                                volant.save()
                            voiture.volant.add(volant)
                    couture = double_couture(post['message'])
                    if (couture != ''):
                        voiture.code_couture = nom_to_hex(couture)
                    elif (len(siege_cuirs) > 0):
                        if siege_cuirs[0].color != '':
                            voiture.couture = siege_cuirs[0].color
                    images = ImageVoiture.objects.filter(voiture=voiture)
                    if len(images)>0:
                        voiture.thumbnail = images[1]
                    else:
                        voiture.delete()
                        continue
                    voiture.save()



                    print('----------------------------------')

        html_text = requests.get(url_posts)
        json_posts = json.loads(html_text.content)

    return HttpResponse(json_posts['paging'])




def pictures_cars ():
    voitures = Voiture.objects.all()
    for voiture in voitures:
       images =  ImageVoiture.objects.filter(voiture=voiture)
       voiture.thumbnail = images[1]
       voiture.save()
       print(voiture.id)


def noms_to_hex():
    matieres = Matiere.objects.all()
    for matiere in matieres:
        color = Couleur.objects.filter(nom=matiere.couleur).first()
        if not color:
            color = Couleur.objects.filter(nom__contains=matiere.couleur).first()
        matiere.code_couleur = color
        matiere.save()

class LastestVoituresList(APIView):
    def get(self, request, format=None):
        page = request.GET.get('page')
        nom = ''
        if (request.GET.get('nom')):
            nom = request.GET.get('nom')
        voitures = Voiture.objects.filter(nom__contains = nom)
        paginator = Paginator(voitures, 8)
        page_voitures = paginator.get_page(page)
        serializer = VoitureSerializer(page_voitures,many=True)
        return Response({'data':serializer.data,'count':paginator.count})

    def post(self,request,format=None):
        details = request.data.get('details')
        voitures = Voiture.objects.all()
        for voiture_siege in details.get('Siege'):
            print('Siege')
            print(voiture_siege)
            voitures = voitures.filter(siege__nom=voiture_siege.get('cuir')).distinct()
            voitures = voitures.filter(siege__code_couleur=voiture_siege.get('color')).distinct()

        for voiture_siege in details.get('Panneaux'):
            print('Panneaux')
            print(voiture_siege)
            voitures = voitures.filter(panneau__nom=voiture_siege.get('cuir')).distinct()
            voitures = voitures.filter(panneau__code_couleur=voiture_siege.get('color')).distinct()

        for voiture_siege in details.get('Tableaux'):
            print('Tableaux')
            print(voiture_siege)
            voitures = voitures.filter(tableau__nom=voiture_siege.get('cuir')).distinct()
            voitures = voitures.filter(tableau__code_couleur=voiture_siege.get('color')).distinct()

        for voiture_siege in details.get('Volant'):
            print('Volant')
            print(voiture_siege)
            voitures = voitures.filter(volant__nom=voiture_siege.get('cuir')).distinct()
            voitures = voitures.filter(volant__code_couleur=voiture_siege.get('color')).distinct()

        if (details.get('Couture')!=''):
            print(details.get('Couture'))
            voitures = voitures.filter(code_couture=details.get('Couture')).distinct()

        print(voitures)
        page = request.data.get('page')
        nom = request.data.get('nom')
        marque = request.data.get('marque')
        print(marque)
        if (marque!='' and marque is not None):
            voitures = voitures.filter(marque__nom=marque).distinct()
        voitures = voitures.filter(nom__contains=nom).distinct()
        paginator = Paginator(voitures, 8)
        page_voitures = paginator.get_page(page)
        serializer = VoitureSerializer(page_voitures, many=True)
        return Response({'data':serializer.data,'count':paginator.count})

class ListCouleur(APIView):
    def get(self,request,format=None):
        Colors = Couleur.objects.all()
        couleurs = []
        print('aaaaa')
        for Color in Colors:
            print(Color)
            if (Matiere.objects.filter(code_couleur = Color)):
                couleurs.append(Color.code)
        return Response(couleurs)

class ListCouleurCouture(APIView):
    def get(self,request,format=None):
        Colors = Couleur.objects.all()
        couleurs = []
        for Color in Colors:
            if (Voiture.objects.filter(code_couture = Color)):
                couleurs.append(Color.code)
        return Response(couleurs)


def cout_to_hex():
    voitures = Voiture.objects.all()
    for voiture in voitures:
        color = Couleur.objects.filter(nom=voiture.couture).first()
        if not color:
            color = Couleur.objects.filter(nom__contains=voiture.couture).first()
        voiture.code_couture = color
        voiture.save()


def nom_to_hex(color_nom):
    color = Couleur.objects.filter(nom=color_nom).first()
    if not color:
        color = Couleur.objects.filter(nom__contains=color_nom).first()
    return color




def voitures (request):
    return render(request,'display/voitures.html')


def index (request):
    #cout_to_hex()

    '''
    title = " Hello there !"
    if request.method == 'GET':
        message_form = MessageRegistration()
    elif request.method == 'POST':
        message_form = MessageRegistration(request.POST)
        if message_form.is_valid():
           message =  message_form.save()
    '''
    return render(request,'display/voitures.html')

def voitures_detail(request,id):
    voiture = Voiture.objects.get(id=id)
    voitures = Voiture.objects.filter(marque= voiture.marque)[:5]
    print(voiture.images)
    return render(request,'display/product-details.html',{'voiture':voiture,'voitures':voitures})

def contact_page(request):
    if request.method == 'POST':
        message_form = MessageRegistration(request.POST)
        if message_form.is_valid():
           message =  message_form.save()
    return  render(request,'display/contact.html')

def accueil (request):
    marques = Marque.objects.all().annotate(Count('voiture')).order_by('-voiture__count')
    return render(request,'display/index.html',{'marques':marques[:5]})

def testing (request):
    voitures = Voiture.objects.all()
    return render(request,'display/list_voitures.html',{'voitures':voitures})
