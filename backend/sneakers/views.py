from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SneakerSerializer
from .models import Sneaker
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
def sneaker_list(request):
    
    if request.method == 'GET':
        sneakers = Sneaker.objects.all()
        serializer = SneakerSerializer(sneakers, many=True)
        return Response(serializer.data)
    
    
    elif request.method == 'POST':
        serializer = SneakerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def sneaker_detail(request, pk):
    sneaker = get_object_or_404(Sneaker, pk=pk)
    if request.method == 'GET':
        serializer = SneakerSerializer(sneaker);
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SneakerSerializer(sneaker, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        sneaker.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)