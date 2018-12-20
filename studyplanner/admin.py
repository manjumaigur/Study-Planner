from django.contrib import admin
from .models import Plan,Path,Subject,Subtopic,Method

# Register your models here.
admin.site.register(Plan)
admin.site.register(Path)
admin.site.register(Subject)
admin.site.register(Subtopic)
admin.site.register(Method)