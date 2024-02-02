from django.db import models


class Category(models.Model):
    name_category = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name_category}'


class Recipes(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_creation = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=128)
    text = models.TextField()
    file = models.FileField(upload_to='static/img')
    products = models.TextField(null=True)

    def __str__(self):
        return f'{self.text}: {self.title}'


class CategoryRecipes(models.Model):
    recipes = models.ForeignKey(Recipes, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
