from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .serializers import SneakerSerializer
from .models import Sneaker
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([AllowAny])
def sneaker_list(request):
    sneakers = Sneaker.objects.all()
    serializer = SneakerSerializer(sneakers, many=True)
    return Response(serializer.data)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_sneakers(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")    
    if request.method == 'POST':
        serializer = SneakerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        sneakers = Sneaker.objects.all()
        serializer = SneakerSerializer(sneakers, many=True)
        return Response(serializer.data)

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