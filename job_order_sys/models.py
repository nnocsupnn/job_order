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
    jo_pcr_recieve = models.DateField(default=None, blank=True, null=True)
    jo_pcr_date_bill = models.DateField(default=None, blank=True, null=True)

    choices = (('nococ','nococ'),
               ('coc','coc'))
    jo_coc = models.DateField(default=None, blank=True, null=True)

    jo_inv_no = models.CharField(max_length=100)
    
    jo_inv_date1 = models.DateField(default=None, blank=True, null=True)
    jo_invoice1 = models.CharField(max_length=200,default="0")
    jo_or1 = models.CharField(max_length=200,default="0")
    jo_payment_date_1 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date2 = models.DateField(default=None, blank=True, null=True)
    jo_invoice2 = models.CharField(max_length=200,default="0")
    jo_or2 = models.CharField(max_length=200,default="0")
    jo_payment_date_2 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date3 = models.DateField(default=None, blank=True, null=True)
    jo_invoice3 = models.CharField(max_length=200,default="0")
    jo_or3 = models.CharField(max_length=200,default="0")
    jo_payment_date_3 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date4 = models.DateField(default=None, blank=True, null=True)
    jo_invoice4 = models.CharField(max_length=200,default="0")
    jo_or4 = models.CharField(max_length=200,default="0")
    jo_payment_date_4 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date5 = models.DateField(default=None, blank=True, null=True)
    jo_invoice5 = models.CharField(max_length=200,default="0")
    jo_or5 = models.CharField(max_length=200,default="0")
    jo_payment_date_5 = models.DateField(default=None, blank=True, null=True)

    jo_or_date = models.DateField(default=date.today()) 
    jo_second_inv = models.CharField(max_length=100)
    jo_payment_date1 = models.DateField(default=date.today()) 

    jo_addendum_date = models.DateField(default=None, blank=True, null=True)
    jo_addendum = models.CharField(max_length=100,default='0') 

    jo_final_date = models.DateField(default=None, blank=True, null=True)
    jo_final_billing = models.CharField(max_length=100)

    jo_payment_date2 = models.DateField(default=date.today()) 
    jo_remarks = models.CharField(max_length=200)
    jo_rev = models.IntegerField(max_length=11,default='0')
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
    jo_pcr_recieve = models.DateField(default=None, blank=True, null=True)
    jo_pcr_date_bill = models.DateField(default=None, blank=True, null=True)

    choices = (('nococ','nococ'),
               ('coc','coc'))
    jo_coc = models.DateField(default=None, blank=True, null=True)


    jo_inv_no = models.CharField(max_length=100)
    
    jo_inv_date1 = models.DateField(default=None, blank=True, null=True) 
    jo_invoice1 = models.CharField(max_length=200,default="0")
    jo_or1 = models.CharField(max_length=200,default="0")
    jo_payment_date_1 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date2 = models.DateField(default=None, blank=True, null=True)
    jo_invoice2 = models.CharField(max_length=200,default="0")
    jo_or2 = models.CharField(max_length=200,default="0")
    jo_payment_date_2 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date3 = models.DateField(default=None, blank=True, null=True)
    jo_invoice3 = models.CharField(max_length=200,default="0")
    jo_or3 = models.CharField(max_length=200,default="0")
    jo_payment_date_3 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date4 = models.DateField(default=None, blank=True, null=True)
    jo_invoice4 = models.CharField(max_length=200,default="0")
    jo_or4 = models.CharField(max_length=200,default="0")
    jo_payment_date_4 = models.DateField(default=None, blank=True, null=True)

    jo_inv_date5 = models.DateField(default=None, blank=True, null=True)
    jo_invoice5 = models.CharField(max_length=200,default="0")
    jo_or5 = models.CharField(max_length=200,default="0")
    jo_payment_date_5 = models.DateField(default=None, blank=True, null=True)

    jo_or_date = models.DateField(default=date.today()) 
    jo_second_inv = models.CharField(max_length=100)
    jo_payment_date1 = models.DateField(default=date.today())
     
    jo_addendum_date = models.DateField(default=None, blank=True, null=True)
    jo_addendum = models.CharField(max_length=100,default='0') 

    jo_final_date = models.DateField(default=None, blank=True, null=True)
    jo_final_billing = models.CharField(max_length=100)

    jo_payment_date2 = models.DateField(default=date.today()) 
    jo_remarks = models.CharField(max_length=200)
    jo_rev = models.IntegerField(max_length=11,default='0')
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
