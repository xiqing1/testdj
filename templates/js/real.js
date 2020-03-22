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
    	  lab_main.innerHTML = "别墅分类";
    	  sel_main.add(new Option("独栋","s_1_house")) ;
    	  sel_main.add(new Option("双拼","s_1_duplex",));
        sel_main.add(new Option("联排","s_1_townhouse"));
        sel_main.add(new Option("叠墅","s_1_villa"));
        
        lab_sec.innerHTML = "";
        lab_sec.disabled=true;
        sel_sec.disabled=true;
        
        lab_third.innerHTML = "面积和户数";
        sel_third.add(new Option("140 / 2","s_3_1"));
        sel_third.add(new Option("180 / 2","s_3_2"));
        break;
      case "C_Multi":
        lab_main.innerHTML = "多层数";
        sel_main.add(new Option("四层","s_1_4f")) ;
				sel_main.add(new Option("五层","s_1_5f")) ;
				sel_main.add(new Option("六层","s_1_6f")) ;
				sel_main.add(new Option("七层","s_1_7f")) ;
				sel_main.add(new Option("四连叠","s_1_4double")) ;
				sel_main.add(new Option("六连叠","s_1_6double")) ;

				lab_sec.disabled=false;
        sel_sec.disabled=false;
        
    	  lab_sec.innerHTML = "单层户数";
   			sel_sec.add(new Option("单层一户","s_2_1"));
        sel_sec.add(new Option("单层二户","s_2_2"));
        sel_sec.add(new Option("单层三户","s_2_3"));
        sel_sec.add(new Option("单层四户","s_2_4"));
        sel_sec.add(new Option("单层五户","s_2_5"));
        sel_sec.add(new Option("单层六户","s_2_6"));
        
        lab_third.innerHTML = "面积和户数";
        sel_third.add(new Option("90 / 1","s_3_1"));
        sel_third.add(new Option("150 / 2","s_3_2"));
        sel_third.add(new Option("230 / 1","s_3_3"));
        break;
      case "C_High":
    	  lab_main.innerHTML = "高层数";
        lab_sec.innerHTML = "单层户数";
        
        lab_sec.disabled=false;
        sel_sec.disabled=false;
        break;
    }
    
}