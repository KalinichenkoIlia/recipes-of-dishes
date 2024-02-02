"""
URL configuration for recipes project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from dishes import views
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'recipes', views.RecipesViewset)
router.register(r'categories', views.CategoryViewset)
router.register(r'crep', views.CategoryRecipesViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path("openapi", get_schema_view(title="Your Project", description="API for all things …"), name="openapi-schema",),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
