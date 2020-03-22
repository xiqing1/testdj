from django.shortcuts import render
from django.views.decorators import csrf
from testdj.calcEngine import *

   
def legIntVal( htmlInput):
	  if htmlInput:
	  	return int(htmlInput)
	  else:
	  	return 1
	  
# receive request from post
def calc(request):
    ctx ={}
    if request.POST:
        print(request)
                
        A1 = legIntVal( request.POST.getlist("q3_input3[0][]")[9] ) 
        B1 = legIntVal( request.POST.getlist("q3_input3[1][]")[9] ) 
        C1 = legIntVal( request.POST.getlist("q3_input3[2][]")[9] ) 
                
        A2 = legIntVal( request.POST.getlist("q3_input3[0][]")[10] )
        B2 = legIntVal( request.POST.getlist("q3_input3[1][]")[10] ) 
        C2 = legIntVal( request.POST.getlist("q3_input3[2][]")[10] ) 
        
        A3 = legIntVal( request.POST.getlist("q3_input3[0][]")[12] ) 
        B3 = legIntVal( request.POST.getlist("q3_input3[1][]")[12] ) 
        C3 = legIntVal( request.POST.getlist("q3_input3[2][]")[12] ) 
        
        rlt1 = legIntVal( request.POST.get("land_para[0]") ) 
        rlt2 = legIntVal( request.POST.get("land_para[1]") ) 
        
                
        print('A1 = {}; B1 = {}; C1 = {}; rlt1= {}'.format(A1,B1,C1,rlt1))
        print('A2 = {}; B2 = {}; C2 = {}; rlt2= {}'.format(A2,B2,C2,rlt2))
        print('A3 = {}; B3 = {}; C3 = {} '.format(A3,B3,C3))
        
        (mx,my,mz,mval) = get_max_rlt(A1, A2, A3, B1, B2, B3, C1, C2, C3, rlt1, rlt2)
        
        ctx['rlt'] = mx
        ctx['rlt1'] = my
        ctx['rlt2'] = mz
        ctx['rlt3'] = mval
    return render(request, "realEstate_land_droplist.html", ctx)