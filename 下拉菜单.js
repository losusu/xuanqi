// JavaScript Document
function myFn(param1,param2){
      var myli = document.getElementById(param1);
      var myul = document.getElementById(param2);
      myli.onmouseover = function(){
        myul.style.display = 'block';
      }
      myli.onmouseout = function(){
         myul.style.display = 'none';
     }
  }
  myFn('li01','ul01');
  

