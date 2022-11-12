from django.contrib import admin

# Register your models here.
from .models import Message, ImageVoiture, Voiture, Marque, Matiere

admin.site.register(Message)
admin.site.register(Marque)
admin.site.register(Matiere)


class VoitureImageAdmin(admin.StackedInline):
    model = ImageVoiture

@admin.register(Voiture)
class VoitureAdmin(admin.ModelAdmin):
    inlines = [VoitureImageAdmin]

    class Meta:
        model = Voiture

@admin.register(ImageVoiture)
class VoitureImageAdmin(admin.ModelAdmin):
    pass
