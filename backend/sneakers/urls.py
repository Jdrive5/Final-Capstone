from django.urls import path
from . import views

urlpatterns = [
    path('', views.sneaker_list),
    path('<int:pk>/', views.sneaker_detail)
]
