from matplotlib import colors
from ..models import Couleur
from deep_translator import GoogleTranslator
from french_color_to_hex.get_color_code import get_color_code


# Example usage
def color_to_hex(color_name,add_to_database=False):
    color_hex = get_color_code('bleu')
 
    if add_to_database and color_hex:
        _, _ = Couleur.objects.get_or_create(code=color_hex, defaults={'nom': color_name})
    return color_hex
