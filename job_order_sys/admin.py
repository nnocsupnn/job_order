from django.contrib import admin
from .models import MegaA, MegaB, AllowedUsersA, AllowedUsersB, Comments

# Register your models here.
class MegaAAdmin(admin.ModelAdmin):
    list_display = ('jo_code','id', 'jo_clients')

#registring megab table to admin page
class MegaBAdmin(admin.ModelAdmin):
    list_display = ('jo_code','id', 'jo_clients')

#registring CommentAdmin table to admin page
class CommentAdmin(admin.ModelAdmin):
    list_display = ('comment_user','comment_id','comment_date')



#Register model in admin page so we can add remove edit every data using admin
admin.site.register(AllowedUsersA)
admin.site.register(AllowedUsersB)
admin.site.register(MegaA, MegaAAdmin)
admin.site.register(MegaB, MegaBAdmin)
admin.site.register(Comments, CommentAdmin)

#setting site header
admin.site.site_header = "Project Administration"
