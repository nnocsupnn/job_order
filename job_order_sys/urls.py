from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^megaa/$', views.index_a, name="index_a"),
    url(r'^megab/$', views.index_b, name="index_b"),
    url(r'^$', views.login_page, name="login_page"),
    url(r'^megaa/project/(?P<id>\d+)/$', views.details_a, name="details_a"),
    url(r'^megab/project/(?P<id>\d+)/$', views.details_b, name="details_b"),
    url(r'^addcomment/(?P<id>\d+)$',views.addcomment, name="addcomment"),
    url(r'^login/$', views.login_page, name="login_page"),
    url(r'^logout/$', views.logout_page, name="logout_page"),
    url(r'^authenticate$', views.loggedin_page, name="loggedin_page")
]