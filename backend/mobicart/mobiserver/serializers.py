from rest_framework import serializers
from .models import Product,Category,Order,OrderItem,Cart,Payment,Review,Wishlist,Shipping,Slider

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