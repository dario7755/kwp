var akcija = fillMeny();

function fillMeny() {
var veza1 = "https://www.mathos.unios.hr/index.php/nastava/matematika-i-racunarstvo/265#materijali";
var veza2 = "https://en.wikipedia.org/wiki/List_of_algorithms";
var veza3 = "https://en.wikipedia.org/wiki/Shortest_path_problem";
var veza4 = "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm";
var veza5 = "https://magazin.hrt.hr/561569/znanost-i-tehnologija/hrvatski-5g-grad-mogao-bi-biti-osijek";
var veza6 = "https://en.wikipedia.org/wiki/Torus";
var veza7 = "#Algoritam1";
var veza8 = "#Algoritam2";
var veza9 = "#Algoritam3";
var veza10 = "#Algoritam4";
var veze = [veza,veza1,veza2,veza3,veza4,veza5,veza6,veza7,veza8,veza9,veza10];

var br = Math.floor(Math.random() * 100)+1;
var brv = Math.floor(Math.random() * 10)+1;	

var veza = veze[brv];

var slika = {name:"NovaSlika.svg", alt:"NovaSlika"+brv};

class Action {
  constructor(ime,slika,veza) {
    this.name = ime;
	this.image = slika;
	this.alt = slika.alt;
	this.link = veza;
	this.hlink = veze[brv];
  }
}

var mojaAkcija = new Action("NovaAkcija"+brv,slika,"# Link"+brv);

var x;
var t = "";
var s = document.createElement("img");
var obj;
var p = ["p1","p2","p3","p4","p5","p6","p7","p8","p9"];
var b = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
// document.getElementById("slikasort").style.marginTop = "50px";	

for(obj of p) {
  document.getElementById(obj).style.fontSize = "18px";	
  document.getElementById(obj).style.fontWeight = "500";
 }	
for(obj of b) {
  document.getElementById(obj).style.fontSize = "16px";	
  document.getElementById(obj).style.fontWeight = "400";
  document.getElementById(obj).style.borderBottomColor = "white";
  document.getElementById(obj).style.borderWidth = "medium";
  // document.getElementById(obj).style.Height = 100;
 }	
for(x in mojaAkcija) {  
  document.getElementById("naslov2").innerHTML = mojaAkcija.name;
  document.getElementById("naslov3").innerHTML = mojaAkcija.alt;
  document.getElementById("naslov4").innerHTML = mojaAkcija.image.name;
   // s.setAttribute("src", "assets/img/novo.svg");
   // s.setAttribute("width", "25");
   // s.setAttribute("height", "25");
  // document.getElementById("naslov4").createElement("IMG");
  // document.getElementById("naslov4").setAttribute("src", "assets/img/novo.svg");
  document.getElementById("naslov5").innerHTML = mojaAkcija.link;
  mj = document.getElementById("naslov5").innerHTML; 
  document.getElementById("naslov5").innerHTML = mj.link(veza);
  document.getElementById("naslov5").style.fontWeight = "400";
  document.getElementById("naslov5").style.fontColor = rgb(250,250,250);
 }
}
