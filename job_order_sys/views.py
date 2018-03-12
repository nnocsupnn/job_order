from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, HttpRequest
from django.contrib import auth
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from .models import MegaA, MegaB, AllowedUsersA, AllowedUsersB, Comments
from datetime import datetime, timedelta
from loggedusers import get_all_logged_in_users
import sys

# Create your views here.
def login_page(request):
    if request.user.is_authenticated:
        return index_a(request)
    else: 
        return render(request,'accounts/login.html')
    

def loggedin_page(request):
    username = request.POST.get('username','')
    password = request.POST.get('password','')
    user = authenticate(username=username,password=password)
    print("\n--------------------LOGIN---------------------")
    print("--> IP: "+request.get_host())
    print("--> Username: " + username + "\n--> Password:"+password+"\n")
    if user is not None:
        login(request,user)
        return HttpResponse('/megaa')
    else:
        return HttpResponse('Incorrect Username or Password.') 

def logout_page(request):
    logout(request)
    return HttpResponseRedirect('/')

#index view and render
def index_a(request):
    print("\n------------- Accessing index-MEGA-A-----------------")
    print("--> user: "+request.user.get_full_name())
    print("--> IP: "+request.get_host())
    online_user = get_all_logged_in_users()
    legend_one = MegaA.objects.filter(jo_sign_contract='nc').count()
    JoCodenc = MegaA.objects.filter(jo_sign_contract='nc')
    JoCodepo = MegaA.objects.filter(jo_po_no='0')
    legend_three = MegaA.objects.filter(jo_po_no='0').count()
    legend_four = MegaA.objects.filter(jo_po_no='').count()
    legend_six = MegaA.objects.filter(jo_coc='coc').count()
    count = MegaA.objects.all().count()
    jos = MegaA.objects.all()
    if request.user.is_authenticated:
        name = request.user.get_username()
        megaa = AllowedUsersA.objects.filter(user_fullname=name).count()
        if megaa == 1:
            return render(request,'megaa.html',{
                'jo':jos,
                'nc':legend_one,
                'nopo':legend_three,
                'po':legend_four,
                'coc':legend_six,
                'count':count,
                'sc_Code':JoCodenc,
                'po_Code':JoCodepo,
                'full_name': request.user.get_full_name(),
                'online_user':online_user
            })
        else:
            messages.error(request, 'Youre not allowed to Mega A.')
            return HttpResponseRedirect('/megab')
    else:
        return login_page(request)

def index_b(request):
    online_user = get_all_logged_in_users()
    print(online_user)
    print("\n------------- Accessing index-MEGA-B-----------------")
    print("--> user: "+request.user.get_full_name())
    print("--> IP: "+request.get_host())
    legend_one = MegaB.objects.filter(jo_sign_contract='nc').count()
    JoCodenc = MegaB.objects.filter(jo_sign_contract='nc')
    JoCodepo = MegaB.objects.filter(jo_po_no='0')
    legend_three = MegaB.objects.filter(jo_po_no='0').count()
    legend_four = MegaB.objects.filter(jo_po_no='').count()
    legend_six = MegaB.objects.filter(jo_coc='coc').count()

    count = MegaB.objects.all().count()
    jos = MegaB.objects.all()
    
    if request.user.is_authenticated:
        name = request.user.get_username()
        megab = AllowedUsersB.objects.filter(user_fullname=name).count()
        if megab == 1:
            return render(request,'megab.html',{
                'jo':jos,
                'nc':legend_one,
                'nopo':legend_three,
                'po':legend_four,
                'coc':legend_six,
                'count':count,
                'sc_Code':JoCodenc,
                'po_Code':JoCodepo,
                'full_name': request.user.get_full_name(),
                'online_user':online_user
            })
        else:
            messages.error(request, 'Youre not allowed to Mega B.')
            return HttpResponseRedirect('/megaa')
    else:
        return login_page(request)
    

#details view and render html views
def details_a(request, id):
    print("\n------------- Viewing "+ id +" -----------------")
    print("--> user: "+request.user.get_username())
    jo = MegaA.objects.get(id=id)
    comments = Comments.objects.filter(comment_id=id,comment_dept='megaa')
    dept = {
        'megaa':'megaa'
    }
    return render(request, 'detailsa.html',{
        'jos': jo,
        'commentss': comments,
        'name':request.user.get_full_name(),
        'dept':dept
    })
    

def details_b(request, id):
    print("\n------------- Viewing "+ id +" -----------------")
    print("--> user: "+request.user.get_username())
    jo = MegaB.objects.get(id=id)
    comments = Comments.objects.filter(comment_id=id,comment_dept='megab')
    dept = {
        'megab':'megab'
    }
    return render(request, 'detailsb.html',{
        'jos': jo,
        'commentss': comments,
        'name':request.user.get_full_name(),
        'dept':dept
    })
    
    
#add comment function from ajax
def addcomment(request, id):
    idd = request.POST['id']
    dept = request.POST['dept']
    name = request.user.get_full_name()
    text = request.POST['text']
   #if empty save will not execute..
    if name:
        Comm = Comments()
        Comm.comment_id = idd
        Comm.comment_dept = dept
        Comm.comment_user = name
        Comm.comment_text = text
        Comm.save()
        return HttpResponse('<strong>You commented on this project succesfuly</strong>.')
    else:
        return HttpResponse('Something went Wrong..')

    