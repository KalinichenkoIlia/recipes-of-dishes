from django.contrib import admin
from .models import Recipes, Category, CategoryRecipes

admin.site.register(Recipes)
admin.site.register(Category)
admin.site.register(CategoryRecipes)

# Register your models here.
