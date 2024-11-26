from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from mobiserver.models import User,Category,Product,Order,OrderItem,Cart,Payment,Review,Wishlist,Shipping
# Register your models here.

from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('email', 'phone', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password', 'first_name', 'last_name', 'phone')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'phone', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email', 'phone')
    ordering = ('email',)


admin.site.register(User, CustomUserAdmin)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Cart)
admin.site.register(Payment)
admin.site.register(Wishlist)
admin.site.register(Review)
admin.site.register(Shipping)



