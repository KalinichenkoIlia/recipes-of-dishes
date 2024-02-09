from django.shortcuts import render
from rest_framework import viewsets

from .serializers import *
from .models import *


class RecipesViewset(viewsets.ModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer

    def get_queryset(self):
        queryset = Recipes.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category__name_category=category)
        return queryset


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRecipesViewset(viewsets.ModelViewSet):
    queryset = CategoryRecipes.objects.all()
    serializer_class = CategoryRecipesSerializer

