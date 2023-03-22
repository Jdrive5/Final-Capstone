from django.db import models
from authentication.models import User

# Create your models here.

size_choices = [
    ('7', '7'),
    ('7.5', '7.5'),
    ('8', '8'),
    ('8.5', '8.5'),
    ('9', '9'),
    ('9.5', '9.5'),
    ('10', '10'),
    ('10.5', '10.5'),
    ('11', '11'),
    ('11.5', '11.5'),
    ('12', '12'),
    ('12.5', '12.5'),
    ('13', '13'),
    ('13.5', '13.5'),
    ('14', '14'),
    ('14.5', '14.5'),
    ('15', '15'),
]


class Sneaker(models.Model):
    name = models.CharField(max_length=255)
    style = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    size = models.CharField(max_length=5, choices=size_choices)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    image = models.ImageField(upload_to='sneakers/', default='default_image.jpg')


    def __str__(self):
        return f"{self.name} {self.style} {self.price} {self.size}"
   