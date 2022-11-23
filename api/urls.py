from django.urls import path
from . import views

urlpatterns = [
    path('projects-api/', views.get_Projects, name='projects'),
]
