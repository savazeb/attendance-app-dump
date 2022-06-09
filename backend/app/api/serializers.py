from rest_framework import serializers
from .models import Product,AttendanceTable

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class AttendanceTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceTable
        fields = '__all__'