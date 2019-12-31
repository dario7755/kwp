var smjer = "dolje";
var akcija = fillRoms();

function fillRoms() {

// Klasa Room
class Room {
  constructor( objekt,broj ) {
    this.name = objekt;
	this.itemsCount = broj*10;
  }
}

var br = Math.floor(Math.random() * 10)+1;
var obj = {name:"Predavaonica "+br, broj:br};
// Objekt rooms
var rooms = new Room(obj.name,obj.broj);

var o;
var p = ["p1","p2","p3","p4","p5","p6","p7","p8","p9"];
var b = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
var pd = new Array("");

for( o of p ) {
  var x = document.getElementById(o).innerHTML;		
  pd.push( x );
  document.getElementById(o).style.fontSize = "18px";	
  document.getElementById(o).style.fontWeight = "500";
 }	

 if( smjer == "dolje" )
 { smjer="gore"; 
   pd.reverse(); } 
 else 
 { smjer="dolje"; 
   pd.sort(); }
 
 var i = 1;
 
for( o of p ) {
  var y = document.getElementById(o).innerHTML;
  y.innerHTML = pd[i];	
  ++i;
 }	
 
 var slika = document.getElementById("slikasort");
 slika.style.transform = rotate("180deg");		
}





