
//get random numbers
function rand(min,max){
	return Math.floor(Math.random()*(max-min)+min);

}

function l_storage(type,target,time,getdata){
	this.type=type;
this.target=target;
	this.time=time;
	this.getdata=">>>>Event type:"+this.type+"......"+"Event target:"+this.target+"...... event Time:"+this.time;
	}








//load event
window.addEventListener("load",function(e){
//clear local Storage after 5 second
setInterval(function(){
	localStorage.clear();
},5000);

    
		var data=new l_storage(e.type,"load",new Date());
		var str=data.getdata;


                    if(!localStorage.getItem("Load"))
                    {
                      localStorage.setItem("Load",str);
                    }
                    else
                    {
                   
                      var arr=Array(localStorage.getItem("Load"));
                      arr.push(str);
                      localStorage.setItem("Load",arr);
                    }

	
	});
//end load event



//unload event
window.addEventListener("unload",function(e){

	
		var data=new l_storage(e.type,"unload",new Date());
		var str=data.getdata;


                    if(!localStorage.getItem("unLoad"))
                    {
                      localStorage.setItem("unLoad",str);
                    }
                    else
                    {
                   
                      var arr=Array(localStorage.getItem("unLoad"));
                      arr.push(str);
                      localStorage.setItem("unLoad",arr);
                    }
	
	});
//end load event




var input=document.getElementById("num");
var Generatebutton=document.getElementById("submit");
var words=["Apple","Bee","Cat","Dog","Elephant","Fox","Giraffe","House","Ice Cream",
"Juice","Kangaroo","Lion","Milk","Nuts","Orange","Parrot","Queen","Rabbit","Sea","Tiger",
"Umbrella","Vegetables","Watch","X_ray","Yam","Zebra"];
var letters=new Array();




//generate button event
Generatebutton.addEventListener('click',function(e){


var data=new l_storage(e.type,e.target.value+" "+input.value+" buttons",new Date());
		var str=data.getdata;


                    if(!localStorage.getItem("button==>Generate"))
                    {
                      localStorage.setItem("button==>Generate",str);
                    }
                    else
                    {
                   
                      var arr=Array(localStorage.getItem("button==>Generate"));
                      arr.push(str);
                      localStorage.setItem("button==>Generate",arr);
                    }


	var btn =document.getElementsByTagName('button');
	var div =document.getElementById('div');
	var img1 =document.getElementById('img');
	var h3=document.getElementById('h3');
letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
div.innerHTML="";
img1.innerHTML="";
h3.innerHTML="";
var randomnum=new Array();
if(input.value>26){
	input.value=26;
}
if (input.value<0){
	input.value=0;
}
var range=26;



//generate buttons of letters

for(var i=0;i<input.value;i++){

	var ran=rand(0,range--);
	div.innerHTML+='<button class="btn">'+letters[ran] +'</button>';
	letters.splice(ran,1);
	
 }
for(var i=0;i<btn.length;i++){
	


//letters button events
	btn[i].addEventListener('click',function(e){


		//set local storage for letters buttons 
			var data=new l_storage(e.type,"show image start with "+e.target.textContent,new Date());
		var str=data.getdata;


                    if(!localStorage.getItem("button==>letters"))
                    {
                      localStorage.setItem("button==>letters",str);
                    }
                    else
                    {
                   
                      var arr=Array(localStorage.getItem("button==>letters"));
                      arr.push(str);
                      localStorage.setItem("button==>letters",arr);
                    }
		
		img1.innerHTML="";
		h3.innerHTML="";
	
	//display image for 
	img1.innerHTML='<img src="images/'+this.textContent+'.jpg">';
	for(var l=0;l<words.length;l++){
		if(this.textContent===words[l][0]){
			h3.innerHTML=words[l];
		}
	}
	});
}

});