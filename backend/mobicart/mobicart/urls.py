"""
URL configuration for mobicart project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from rest_framework.routers import DefaultRouter

from rest_framework import routers
from mobiserver.views import ProductViewset,CategoryViewset,OrderViewset,OrderItemViewset,CartViewset,paymentViewset,ReviewViewset,WishlistViewset,ShippingViewset,ProductPhonesViewset,ProductTvViewset,ProductAppliancesViewset,ProductHealthViewset,ProductHomeViewset,ProductFashionViewset,ProductComputingViewset,ProductSuperViewset,ProductBabyViewset,SliderViewset,UserViewSet,CartUserViewset

router = routers.DefaultRouter()
router.register('all/products',ProductViewset,basename='products')
router.register('all/categories',CategoryViewset, basename='category')
router.register('all/orders',OrderViewset, basename='orders')
router.register('all/orderitems',OrderItemViewset, basename='orderitems')
router.register('all/cart',CartViewset, basename='cart')
router.register('all/payment',paymentViewset, basename='payment')
router.register('all/review',ReviewViewset, basename='review')
router.register('all/wishlist',WishlistViewset, basename='wishlist')
router.register('all/shipping',ShippingViewset, basename='shipping')
router.register('all/phones',ProductPhonesViewset, basename='phones')
router.register('all/tvs',ProductTvViewset, basename='tvs')
router.register('all/appliances',ProductAppliancesViewset, basename='appliances')
router.register('all/health',ProductHealthViewset, basename='health')
router.register('all/office',ProductHomeViewset, basename='home')
router.register('all/fashion',ProductFashionViewset, basename='fashion')
router.register('all/computing',ProductComputingViewset, basename='computing')
router.register('all/super',ProductSuperViewset, basename='super')
router.register('all/baby',ProductBabyViewset, basename='baby')
router.register('all/slider',SliderViewset, basename='slider')
router.register('all/carts',CartUserViewset, basename='cartuser')
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('server/',include('mobiserver.urls')),
    path('api/',include(router.urls))
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
