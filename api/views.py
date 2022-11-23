from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.http import HttpResponse, HttpResponseNotFound
import os
from django.views import View

@api_view(['GET'])
def get_Projects(request):
    details = Project.objects.all()
    serializer = ProjectSerializer(details, many=True)
    return Response(serializer.data)

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
