function search() {
 
    var name = document.getElementById("searchForm").elements["searchItem"].value;
    var pattern = name.toLowerCase();
    var targetId = "";
    console.log(targetId)
 
 var divs = document.getElementsByClassName("search_class");
 for (var i = 0; i < divs.length; i++) {
       var para = divs[i].getElementsByTagName("p");
       for (var j = 0; j < para.length;j++){
         var index = para[j].innerText.toLowerCase().indexOf(pattern);
         if (index != -1){
           targetId = divs[i].parentNode.id;
           var searchpara=document.getElementById("graphic_board").innerHTML;
           searchpara=searchpara.toString();
           var new_pattern=new RegExp("("+name+")", "gi");
           var new_text=searchpara.replace(new_pattern, "<span class='highlight'>"+pattern+"</span>");
           document.getElementById(targetId).innerHTML=new_text
           document.getElementById(targetId).scrollIntoView();
           break;
 
         }
       }
     }
   }