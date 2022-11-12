from django.core.paginator import Paginator
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Voiture, ImageVoiture, Couleur

from django.shortcuts import render

from .serializers import VoitureSerializer


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

def get_all_colors_wit_code():

    html_text = requests.get('http://www.ludowalsh.com/HTM/Liste_de_couleurs.htm')
    soup = BeautifulSoup(html_text.content, 'html.parser')
    list = []
    list_couleur = soup.findAll('a', class_='new')
    for i in list_couleur:
        td = i.parent
        next_td_tag = td.findNext('td')
        color = Couleur(code=next_td_tag.attrs.get("bgcolor"),nom=i.text)
        color.save()
        print('---------------------------------------------------')



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
                        Tableau[-1].color = in_colors(word)
                        Tableau[-1].type = ''

                    for type in types:
                        if (is_same(word, type)):
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


def Adding(request):
    html_text = requests.get(
        'https://graph.facebook.com/v11.0/319795044705680/posts?access_token=EAAVOkW18ybgBADefycCfJFulKJ40TenVdF7GWVfKncgKsSM5ZA6EHt4FeltN6c6AMfSXJo3wUiPkvvuNZBLHzuEgQSpGU3NZBh2lkEWMAtaHmKwwdAsIpUfw4APAdRyixPBxqliZBetfCDsKIgqjfm0P3K8qKVGtHlrxIsNY2h7WolXlrpZAz6TsjAVgY4zt60ljIuMnbledk2cw0Xom3a5GRDmMOJklMY2ZAHTYa6CQZDZD&fields=message%2Cattachments%7Bmedia%2Csubattachments%7D%2Climit%3D100&limit=25')
    json_posts = json.loads(html_text.content)


    while ('next' in json_posts['paging'] ):
        print(json_posts['paging']['next'])
        url_posts = json_posts['paging']['next']
        brand_list = []
        images = []
        test = True
        if ('data' in json_posts):
            for post in json_posts['data']:
                if "message" in post:
                    car = get_the_car(post['message'])
                    if (car[0] == '' or car[1] == ''):
                        print(post['message'])
                        print(car)
                        print('----------------------------------')
                    voiture = Voiture()

                    if ((car[0] != '') and (car[1] != '')):
                        marque, _ = Marque.objects.get_or_create(nom=car[0])
                        voiture = Voiture(nom=car[1], marque=marque)
                        voiture.save()
                    else:
                        print(post['message'])
                        continue
                    if ('attachments' in post):
                        if ('subattachments' in post['attachments']['data'][0]):
                            for media in post['attachments']['data'][0]['subattachments']['data']:
                                image_name = re.sub('[:| |-| .]', '_',
                                                    datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f'))
                                res = requests.get(media['media']['image']['src'])
                                file =  open('uploads/images/' + image_name + '.jpg', 'wb')
                                file.write(res.content)
                                file.close()
                                file1 = open('uploads/images/' + image_name + '.jpg', 'rb')
                                file_image = File(file1)

                                image = ImageVoiture(voiture=voiture)
                                image.image.name = image_name + '.jpg'
                                image.save()
                                file.close()

                    siege_cuirs = get_siege(post['message'])
                    if (siege_cuirs != []):
                        for cuir in siege_cuirs:
                            siege, _ = Matiere.objects.get_or_create(nom=cuir.cuir, couleur=cuir.color, type=cuir.type)
                            voiture.siege.add(siege)

                    panneaux_cuirs = get_panneau(post['message'])
                    if (panneaux_cuirs != []):
                        for cuir in panneaux_cuirs:
                            panneau, _ = Matiere.objects.get_or_create(nom=cuir.cuir, couleur=cuir.color,
                                                                       type=cuir.type)
                            voiture.panneau.add(panneau)

                    tableau_cuirs = get_tableau(post['message'])
                    if (tableau_cuirs != []):
                        for cuir in tableau_cuirs:
                            tableau, _ = Matiere.objects.get_or_create(nom=cuir.cuir, couleur=cuir.color,
                                                                       type=cuir.type)
                            voiture.tableau.add(tableau)

                    volant_cuirs = get_volant(post['message'])
                    if (volant_cuirs != []):
                        for cuir in volant_cuirs:
                            volant, _ = Matiere.objects.get_or_create(nom=cuir.cuir, couleur=cuir.color, type=cuir.type)
                            voiture.volant.add(volant)
                    couture = double_couture(post['message'])
                    if (couture != ''):
                        voiture.couture = couture
                    elif (len(siege_cuirs) > 0):
                        if siege_cuirs[0].color != '':
                            voiture.couture = siege_cuirs[0].color
                    voiture.save()



                    print('----------------------------------')

        html_text = requests.get(url_posts)
        json_posts = json.loads(html_text.content)

    return HttpResponse(json_posts['paging'])







def pictures_cars ():
    '''
    voitures = Voiture.objects.all()
    for voiture in voitures:
       images =  ImageVoiture.objects.filter(voiture=voiture)
       voiture.thumbnail = images[1]
       voiture.save()
       print(voiture.id)

    image = ImageVoiture.objects.get(id=540)
    image.image.name = 'bbbb'
    image.save()
    print(image.image.name)
    image_name = re.sub('[:| |-]','_',datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f'))
    res = requests.get('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/192296631_4619365018081973_275876727655572465_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VpMn6j2lKJkAX9fvVCU&_nc_ht=scontent.ftun16-1.fna&oh=4d1eb80975e9015a5e2c620372264ae1&oe=6132B922')
    file = open('uploads/images/'+image_name+'.jpg',"wb")
    file.write(res.content)
    file.write(res.content)
    file.close()
    images = ImageVoiture.objects.all()
    '''

def noms_to_hex():
    matieres = Matiere.objects.all()
    for matiere in matieres:
        color = Couleur.objects.filter(nom=matiere.couleur).first()
        if not color:
            color = Couleur.objects.filter(nom__contains=matiere.couleur).first()
        matiere.code_couleur = color
        matiere.save()