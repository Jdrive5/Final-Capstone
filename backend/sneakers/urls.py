from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_sneakers),
    path('all/', views.sneaker_list),
    path('<int:pk>/', views.sneaker_detail)
]
