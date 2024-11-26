from django.shortcuts import render
from . models import Product, Category,Order,OrderItem,Cart,Payment,Review,Wishlist,Shipping
from . serializers import ProductSerializer,Categoryserializer,Orderserializer,OrderItemserializer,Cartserializer,Paymentserializer,Reviewserializer,Wishlistserializer,Shippingserializer
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.

class ProductViewset(viewsets.ModelViewSet):
         queryset= Product.objects.all()
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser) 


class CategoryViewset(viewsets.ModelViewSet):
        queryset=Category.objects.all()
        serializer_class=Categoryserializer
        parser_classes=(MultiPartParser,FormParser)


class OrderViewset(viewsets.ModelViewSet):
        queryset=Order.objects.all()
        serializer_class=Orderserializer
        parser_classes=(MultiPartParser,FormParser)


class OrderItemViewset(viewsets.ModelViewSet):
        queryset=OrderItem.objects.all()
        serializer_class=OrderItemserializer
        parser_classes=(MultiPartParser,FormParser)



class CartViewset(viewsets.ModelViewSet):
        queryset=Cart.objects.all()
        serializer_class=Cartserializer
        parser_classes=(MultiPartParser,FormParser)


class paymentViewset(viewsets.ModelViewSet):
        queryset=Payment.objects.all()
        serializer_class=Paymentserializer
        parser_classes=(MultiPartParser,FormParser)


class ReviewViewset(viewsets.ModelViewSet):
        queryset=Review.objects.all()
        serializer_class=Reviewserializer
        parser_classes=(MultiPartParser,FormParser)


class WishlistViewset(viewsets.ModelViewSet):
        queryset=Wishlist.objects.all()
        serializer_class=Wishlistserializer
        parser_classes=(MultiPartParser,FormParser)

class ShippingViewset(viewsets.ModelViewSet):
        queryset=Shipping.objects.all()
        serializer_class=Shippingserializer
        parser_classes=(MultiPartParser,FormParser)

