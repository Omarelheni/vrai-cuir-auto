from django.views.generic import TemplateView
from django.shortcuts import render
from core.models import Marque
from django.db.models import Count



class AccueilView(TemplateView):
    template_name = 'display/index.html'

    def get(self, request, *args, **kwargs):
        self.display_messages(request)
        # Retrieve and pass the first 5 marques to the template
        marques = Marque.objects.annotate(num_voitures=Count('voiture'))[:5]
        return render(request, self.template_name, {'marques': marques})

    def display_messages(self, request):
        success_message = request.GET.get('success')
        failure_message = request.GET.get('failure')

        if success_message:
            messages.success(request, success_message)
        if failure_message:
            messages.error(request, failure_message)
