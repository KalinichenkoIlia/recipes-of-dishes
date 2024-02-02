from .models import *
from rest_framework import serializers


class RecipesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipes
        fields = ['id', 'date_creation', 'title', 'products', 'text', 'file', 'category']


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name_category']


class CategoryRecipesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CategoryRecipes
        fields = ['recipes', 'category']
