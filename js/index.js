// JavaScript Document

window.onload=function(){
   var oBanner=document.getElementById('banner');
   var oUl=oBanner.getElementsByTagName('ul')[1];
   var aLi=oUl.getElementsByTagName('li');
   var oUl1=oBanner.getElementsByTagName('ul')[2];
   var aLi1=oUl1.getElementsByTagName('li');
   for(var i=0;i<aLi1.length;i++){
	   aLi1[i].index=i;
	  aLi1[i].onmouseover=function(){
		  for(var i=0;i<aLi1.length;i++){
			  aLi1[i].className='';
			  aLi[i].className='';
			  }
		  this.className='active';
		  aLi[this.index].className='active';
	   }; 
	   
	}

	
};






