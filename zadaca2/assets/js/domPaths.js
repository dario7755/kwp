
var start=0;
var cilj=0;
var s=0;	
var mj=[0,0,0,0,0,0,0,0,0,0];
var putanja = " ";

var tu = domPathsAkcija(ob,br,lk);

function domPathsAkcija(obj,brj,lok) {
	
	var r = Math.floor(Math.random() * 255)+1;
	var g = Math.floor(Math.random() * 255)+1;
	var b = Math.floor(Math.random() * 255)+1;
	var element = document.getElementById(obj).tagName;
	
	if( mj[lok] == 0 ) {
		if( s < 2 ){ 		    		
		var x = document.getElementById(obj);
		var y = document.getElementById(brj);
		if( mj[lok]==0 ){
			x.style.backgroundColor = "blue";
			y.style.backgroundColor = "blue";
			mj[lok]=1;
			++s;
			
			putanja = putanja+element;
			if( s < 2 ){ putanja = putanja+" -> "; }	
		}		
	}
	if( s == 2 ){ 	
		putanja = putanja+element;
		document.getElementById("p9").innerHTML = " DOM putanja ";
		document.getElementsById("b9").innerHTML = putanja;
		mj[lok]=1;
		++s;
	    } 
	}
	else if( mj[lok] == 1 ) {
	 		x.style.backgroundColor = "rgb(68,124,172)";
			y.style.backgroundColor = "rgb(68,124,172)";
	 		mj[lok]=0;
	 		--s; 
	}
	return;
}	

