function myFunction(val)
{
    <!-- alert(val); !>
    
    sel_main = document.getElementById("input_5_0_1");
    sel_sec = document.getElementById("input_5_0_2");
    sel_third = document.getElementById("input_5_0_3");
    
    lab_main = document.getElementById("label_5_col_1");
    lab_sec = document.getElementById("label_5_col_2");
    lab_third = document.getElementById("label_5_col_3");
    
    sel_main.options.length = 0;
    sel_sec.options.length = 0;
    sel_third.options.length = 0;
    
    switch(val)
    {
    	case "C_Villa":			    	  
    	  lab_main.innerHTML = "��������";
    	  sel_main.add(new Option("����","s_1_house")) ;
    	  sel_main.add(new Option("˫ƴ","s_1_duplex",));
        sel_main.add(new Option("����","s_1_townhouse"));
        sel_main.add(new Option("����","s_1_villa"));
        
        lab_sec.innerHTML = "";
        lab_sec.disabled=true;
        sel_sec.disabled=true;
        
        lab_third.innerHTML = "����ͻ���";
        sel_third.add(new Option("140 / 2","s_3_1"));
        sel_third.add(new Option("180 / 2","s_3_2"));
        break;
      case "C_Multi":
        lab_main.innerHTML = "�����";
        sel_main.add(new Option("�Ĳ�","s_1_4f")) ;
				sel_main.add(new Option("���","s_1_5f")) ;
				sel_main.add(new Option("����","s_1_6f")) ;
				sel_main.add(new Option("�߲�","s_1_7f")) ;
				sel_main.add(new Option("������","s_1_4double")) ;
				sel_main.add(new Option("������","s_1_6double")) ;

				lab_sec.disabled=false;
        sel_sec.disabled=false;
        
    	  lab_sec.innerHTML = "���㻧��";
   			sel_sec.add(new Option("����һ��","s_2_1"));
        sel_sec.add(new Option("�������","s_2_2"));
        sel_sec.add(new Option("��������","s_2_3"));
        sel_sec.add(new Option("�����Ļ�","s_2_4"));
        sel_sec.add(new Option("�����廧","s_2_5"));
        sel_sec.add(new Option("��������","s_2_6"));
        
        lab_third.innerHTML = "����ͻ���";
        sel_third.add(new Option("90 / 1","s_3_1"));
        sel_third.add(new Option("150 / 2","s_3_2"));
        sel_third.add(new Option("230 / 1","s_3_3"));
        break;
      case "C_High":
    	  lab_main.innerHTML = "�߲���";
        lab_sec.innerHTML = "���㻧��";
        
        lab_sec.disabled=false;
        sel_sec.disabled=false;
        break;
    }
    
}