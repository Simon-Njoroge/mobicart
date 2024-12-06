from django.shortcuts import render,redirect
from . models import Product, Category,Order,OrderItem,Cart,Payment,Review,Wishlist,Shipping,Slider,User
from . serializers import ProductSerializer,Categoryserializer,Orderserializer,OrderItemserializer,Cartserializer,Paymentserializer,Reviewserializer,Wishlistserializer,Shippingserializer,sliderserializer,SignupSerializer, LoginSerializer
from rest_framework import viewsets,status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from . credentials import MpesaAccessToken, MpesaPassword
import requests
class UserViewSet(viewsets.ViewSet):

    @action(detail=False, methods=['post'])
    def signup(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.save()
                return Response({
                    'message': 'User created successfully',
                    'user': serializer.data
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                print(f"Error during user creation: {e}")
                return Response({"detail": "An error occurred while creating the user."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.validated_data['user']
                refresh = RefreshToken.for_user(user)

                return Response({
                    'message': 'Login successful',
                    'access': str(refresh.access_token),
                    'refresh': str(refresh),
                    'user': {
                        'email': user.email,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'phone': getattr(user, 'phone', '')
                    }
                }, status=status.HTTP_200_OK)
            except Exception as e:
                print(f"Error during login: {e}")
                return Response({"detail": "An error occurred while processing your request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProductViewset(viewsets.ModelViewSet):
         queryset= Product.objects.all()
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser) 

class ProductPhonesViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='2')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser) 


class ProductTvViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='3')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser) 


class ProductAppliancesViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='4')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser) 


class ProductHealthViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='5')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser) 

class ProductHomeViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='6')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser)



class ProductFashionViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='7')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser)  

class ProductComputingViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='8')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser)  

class ProductSuperViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='9')
         serializer_class=ProductSerializer
         parser_classes = (MultiPartParser, FormParser)


class ProductBabyViewset(viewsets.ModelViewSet):
         queryset= Product.objects.filter(category='10')
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



from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Cart
from .serializers import Cartserializer

class CartUserViewset(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = Cartserializer
    parser_classes = (MultiPartParser, FormParser)

    @action(detail=False, methods=['get'], url_path='user-cart-items')
    def user_cart_items(self, request):
        try:
            # Retrieve the email from the request query parameters or from the authenticated user
            user_email = request.query_params.get('email')  # Assuming email is passed as a query parameter

            if not user_email:
                return Response({"detail": "Email parameter is required."}, status=400)

            # Query Cart items for the user with the given email
            cart_items = Cart.objects.filter(user__email=user_email)

            if not cart_items.exists():
                return Response({"detail": "No cart items found for this user."}, status=404)

            # Serialize and return the cart items
            serializer = Cartserializer(cart_items, many=True)
            return Response(serializer.data)

        except Exception as e:
            # Handle any unexpected errors
            return Response({"detail": str(e)}, status=500)


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


class SliderViewset(viewsets.ModelViewSet):
        queryset=Slider.objects.all()
        serializer_class=sliderserializer
        parser_classes=(MultiPartParser,FormParser)
def index(request):
    return render(request,'pay.html')

def stk_push(request):
    if request.method == "POST":
        phone_number = request.POST.get('phone_number')
        amount = request.POST.get('amount')

        access_token = MpesaAccessToken.validated_token

        api_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

        headers = {"Authorization": "Bearer %s" % access_token}
        payload={    
           "BusinessShortCode": MpesaPassword.shortcode,    
           "Password": MpesaPassword.decoded_password,    
           "Timestamp":MpesaPassword.timestamp,    
           "TransactionType": "CustomerPayBillOnline",    
           "Amount": amount,    
           "PartyA":phone_number,    
           "PartyB":MpesaPassword.shortcode,    
           "PhoneNumber":phone_number,    
           "CallBackURL": "https://mydomain.com/pat",    
           "AccountReference":"Test",    
           "TransactionDesc":"Test"
}
        response = requests.post(api_url, json=payload, headers=headers)
        return redirect('http://localhost:5173/paid')
def thank_you(request):
    return render(request,'success.html')