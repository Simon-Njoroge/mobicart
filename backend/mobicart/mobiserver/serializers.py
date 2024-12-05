from rest_framework import serializers
from .models import Product,Category,Order,OrderItem,Cart,Payment,Review,Wishlist,Shipping,Slider,User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ('email', 'phone', 'first_name', 'last_name', 'password')
        extra_kwargs = {
            'email': {'required': True},
            'phone': {'required': False},
            'first_name': {'required': False},
            'last_name': {'required': False},
        }

    def create(self, validated_data):
        """
        Create a new user with the validated data.
        """
        password = validated_data.pop('password', None)
        user = User.objects.create_user(**validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user
    
from rest_framework_simplejwt.tokens import RefreshToken

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data['email'], password=data['password'])
        if user is None:
            raise serializers.ValidationError("Invalid credentials")
        return {'user': user}


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    class Meta:
        model=Product
        fields='__all__'

    def get_image_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image_url.url) if obj.image_url else None

class Categoryserializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'


class Orderserializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        fields='__all__'


class OrderItemserializer(serializers.ModelSerializer):
    class Meta:
        model=OrderItem
        fields='__all__'


class Cartserializer(serializers.ModelSerializer):
    class Meta:
        model=Cart
        fields='__all__'


class Paymentserializer(serializers.ModelSerializer):
    class Meta:
        model=Payment
        fields='__all__'


class Reviewserializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'


class Wishlistserializer(serializers.ModelSerializer):
    class Meta:
        model=Wishlist
        fields='__all__'


class Shippingserializer(serializers.ModelSerializer):
    class Meta:
        model=Shipping
        fields='__all__'



class sliderserializer(serializers.ModelSerializer):

    image_url = serializers.SerializerMethodField()
    class Meta:
        model=Slider
        fields='__all__'

    def get_image_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url) if obj.image else None