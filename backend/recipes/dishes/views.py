from django.shortcuts import render
from rest_framework import viewsets

from .serializers import *
from .models import *


class RecipesViewset(viewsets.ModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer

    def get_queryset(self):
        queryset = Recipes.objects.all()
        category_id = self.request.query_params.get('category_id', None)
        if category_id is not None:
            queryset = queryset.filter(category=category_id)
        return queryset


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRecipesViewset(viewsets.ModelViewSet):
    queryset = CategoryRecipes.objects.all()
    serializer_class = CategoryRecipesSerializer

