from django.db import models
from datetime import date, datetime
from multiselectfield import MultiSelectField

#job table model this will create our model for our database
class AllowedUsersA(models.Model):
    user_fullname = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Allowed Users in Mega A"
    def __str__(self):
        return self.user_fullname

class AllowedUsersB(models.Model):
    user_fullname = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Allowed Users in Mega B"
    def __str__(self):
        return self.user_fullname

#mega projects - table
class MegaA(models.Model):
    jo_date = models.DateField(default=date.today())                                    
    jo_no = models.CharField(max_length=200)
    jo_code = models.CharField(max_length=200)
    jo_clients = models.CharField(max_length=200)
    study = models.TextField(max_length=300,default='Study..')
    jo_qlqn = (('QL', 'QL'),
              ('QN', 'QN'))
    jo_qlqnChoices = MultiSelectField(choices=jo_qlqn)
    jo_project_no = models.CharField(max_length=200)
    jo_contact_price = models.CharField(max_length=200)
    jo_terms = models.CharField(max_length=200)
    jo_vat = models.CharField(max_length=200)
    jo_sign_contract = models.CharField(max_length=100)
    jo_po_no = models.CharField(max_length=200)
    jo_pcr = models.CharField(max_length=200)
    choices = (('nococ','nococ'),
               ('coc','coc'))
    jo_coc = MultiSelectField(choices=choices,default='nococ')
    jo_inv_no = models.CharField(max_length=100)
    jo_or_date = models.DateField(default=date.today()) 
    jo_second_inv = models.CharField(max_length=100)
    jo_payment_date1 = models.DateField(default=date.today()) 
    jo_addendum = models.CharField(max_length=100,default='0') 
    jo_final_billing = models.CharField(max_length=100)
    jo_payment_date2 = models.DateField(default=date.today()) 
    jo_remarks = models.CharField(max_length=200)
    class Meta:
        verbose_name_plural= "MegaA - Projects"
    def __str__(self):
        return self.jo_code

#mega b - projects table
class MegaB(models.Model):
    jo_date = models.DateField(default=date.today())                                    
    jo_no = models.CharField(max_length=200)
    jo_code = models.CharField(max_length=200)
    jo_clients = models.CharField(max_length=200)
    study = models.TextField(max_length=300,default='Study..')
    jo_qlqn = (('QL', 'QL'),
              ('QN', 'QN'))
    jo_qlqnChoices = MultiSelectField(choices=jo_qlqn)
    jo_project_no = models.CharField(max_length=200)
    jo_contact_price = models.CharField(max_length=200)
    jo_terms = models.CharField(max_length=200)
    jo_vat = models.CharField(max_length=200)
    jo_sign_contract = models.CharField(max_length=100)
    jo_po_no = models.CharField(max_length=200)
    jo_pcr = models.CharField(max_length=200)
    choices = (('nococ','nococ'),
               ('coc','coc'))
    jo_coc = MultiSelectField(choices=choices,default='nococ')
    jo_inv_no = models.CharField(max_length=100)
    jo_or_date = models.DateField(default=date.today()) 
    jo_second_inv = models.CharField(max_length=100)
    jo_payment_date1 = models.DateField(default=date.today()) 
    jo_addendum = models.CharField(max_length=100,default='0') 
    jo_final_billing = models.CharField(max_length=100)
    jo_payment_date2 = models.DateField(default=date.today()) 
    jo_remarks = models.CharField(max_length=200)
    class Meta:
        verbose_name_plural= "MegaB - Projects"
    def __str__(self):
        return self.jo_code

#comments table
class Comments(models.Model):
    comment_id = models.CharField(max_length=11)
    comment_dept = models.CharField(max_length=100,default='')
    comment_user = models.CharField(max_length=100)
    comment_text = models.TextField()
    comment_date = models.DateTimeField(default=datetime.now())
    class Meta:
        verbose_name_plural= "Comments"
    def __str__(self):
        return self.comment_user
