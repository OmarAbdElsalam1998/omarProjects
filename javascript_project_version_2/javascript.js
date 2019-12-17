//get random numbers
function rand(min,max){
	return Math.floor(Math.random()*(max-min)+min);

}
//function template
function l_storage(type,target,time){
	this.type=type;
this.target=target;
	this.time=time;
	
	}



//get localstorage data and insert it into  database after 5 seconds
setInterval(function(){

  var eventObjects=new Array();
  var count =0;


/*get data of load event from localstorage ,split event objects into array ,
split event string into another array and insert it into array of objects */
var localStorageLoad=new Array();
 if(localStorage.getItem("Load")){
 localStorageLoad=localStorage.getItem("Load").split(",");
for(var h=0;h<localStorageLoad.length;h++){
  var splitEvent=localStorageLoad[h].split(';');
eventObjects[count++]=new l_storage(splitEvent[0],splitEvent[1],splitEvent[2]);

 }


 }

/*get data of unload event from localstorage ,split event objects into array ,
split event string into another array and insert it into array of objects */
var localStorageunLoad=new Array();
if(localStorage.getItem("unLoad")){
 localStorageunLoad=localStorage.getItem("unLoad").split(",");
for(var h=0;h<localStorageunLoad.length;h++){
  var splitEvent=localStorageunLoad[h].split(';');
eventObjects[count++]=new l_storage(splitEvent[0],splitEvent[1],splitEvent[2]);

 }


 }


/*get data from localStorage for button generate ,split event objects into array ,
split event string into another array and insert it into array of objects */
 var localStorageGenerate=new Array();
 if(localStorage.getItem("button==>Generate")){
 localStorageGenerate=localStorage.getItem("button==>Generate").split(",");
for(var h=0;h<localStorageGenerate.length;h++){
  var splitEvent=localStorageGenerate[h].split(';');
eventObjects[count++]=new l_storage(splitEvent[0],splitEvent[1],splitEvent[2]);

 }


 }
  /*get data from localStorage for buttons=>letters ,split event objects into array ,
split event string into another array and insert it into array of objects */                
  var localStoragebutton=new Array();
  if(localStorage.getItem("button==>letters")){
 localStoragebutton=localStorage.getItem("button==>letters").split(",");
for(var h=0;h<localStoragebutton.length;h++){
  var splitEvent=localStoragebutton[h].split(';');
eventObjects[count++]=new l_storage(splitEvent[0],splitEvent[1],splitEvent[2]);

 }
}
 $.ajax({
    "type": "POST",
    "url": "pro.php",
    "data": {"eventObjects":JSON.stringify(eventObjects)},
    "success": function(response){
      localStorage.clear();
       console.log(response);
     
      
     }
 });

},5000);





//start of load event
window.addEventListener("load",function(e){


    //create object for load event
		var data=new l_storage(e.type,"load",new Date());
		var type=data.type;
		var target=data.target;
		var time=data.time;
		var str=type+";"+target+";"+time;
 
                    //set data of load event into localstorage 
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

//end of load event





// start of unload event
window.addEventListener("unload",function(e){

	//create object for unload event
		var data=new l_storage(e.type,"unload",new Date());
			var type=data.type;
		var target=data.target;
		var time=data.time;
	var str=type+";"+target+";"+time;

                    //set data of unload event into localstorage 
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
//end of unload event




var input=document.getElementById("num");
var Generatebutton=document.getElementById("submit");
var words=["Apple","Bee","Cat","Dog","Elephant","Fox","Giraffe","House","Ice Cream",
"Juice","Kangaroo","Lion","Milk","Nuts","Orange","Parrot","Queen","Rabbit","Sea","Tiger",
"Umbrella","Vegetables","Watch","X_ray","Yam","Zebra"];
var letters=new Array();




// start of generate button event
Generatebutton.addEventListener('click',function(e){


//create object for generate button event
var data=new l_storage(e.type,e.target.value+" "+input.value+" buttons",new Date());
			var type=data.type;
		var target=data.target;
		var time=data.time;
		var str=type+";"+target+";"+time;

                     //set data of generate button into localstorage 
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
	


// start of buttons=>letters events
	btn[i].addEventListener('click',function(e){


		//set localStorage for  buttons=>letters event
			var data=new l_storage(e.type,"show image start with "+e.target.textContent,new Date());
			var type=data.type;
		var target=data.target;
		var time=data.time;
		var str=type+";"+target+";"+time;

                  
                    //set data for buttons=>letters into localstorage 
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
	
	//display image starting with letter
	img1.innerHTML='<img src="images/'+this.textContent+'.jpg">';
	for(var l=0;l<words.length;l++){
		if(this.textContent===words[l][0]){
			h3.innerHTML=words[l];
		}
	}
	});

  //end of buttons=>letters events

}
});
//end of generate button  event


//display event objects from database
var b=$('#showdatabase');
var tab=$("table");
b.on("click",function(){
  tab.css({"display":"block"});

  var s1="<tr style='background:#ec4a4a'><td>Event_type</td><td>Event_target</td><td>Event_time</td></tr>";
 $.ajax({
    "type": "GET",
    "url": "pro.php",
    "data": {"eventObjects":""},
    "success": function(response){
      
      var personObject = JSON.parse(response);
      
      $.each(personObject,function(){
        var type=$(this)[0]['event_type'];
        var target=$(this)[0]['event_target'];
        var time=$(this)[0]['event_time'];
        s1+="<tr><td>"+type+"</td><td>"+target+"</td><td>"+time+"</td></tr>"




      });
      tab.html(s1);
      
      
      }
 });

});
var hide=$('#hidedatabase');
hide.on("click",function(){

  tab.css({"display":"none"});


});


