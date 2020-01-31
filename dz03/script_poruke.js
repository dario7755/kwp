
var podatci, poruka, p, myObj, myJSON, tekst, obj;
var poruke = [" "];
var mj = 1;
var k = 0;

$(document).ready(function(){
  $("#txt1").click(function(){
    $(this).hide();
  });
});
   
/*	
$(document).ready(() => {
// Ovdje koristimo jQuery
	 	
	$("p.p1").text(" Poruka 1 ");
	$("#p1").html("<h3> Poruka... </h3>");
	
	$("#p2").html("<h3>Poruka 2</h3>");
		
	// $("p.p2").append(" Poruka...Nova... ");
	// $("p.p2").html(" Novo... ");
	
		$("#p3").html("<h3>Poruka 3</h3>");
		
		$("#p4").html("<h2>Poruka 4</h2>");		

	/*	
	$("#bt").click(function(){					
		var txt = $("#txt1").html();
		  var d = txt.length; 
		  
		$("#rd1").html("<h3> Poruka Nova ... </h3>");
		// $("#t2").first.html("<h3>Poruka Nova...</h3>");	
		
		// p = p+d;
		// var poz = document.getElementById("rd4").tagName;
		if ( d>0 && d<500 ) { 
  

			$.post("demo_ajax_gethint.asp", {suggest: txt}, function(result){
			$("#p5").html(result);
		});
	});	
	*/
	
		
	/*
	let addItem = (txt1) => {
    $.ajax("/item", {data: { txt1 }, method: "POST"})
        .done(data => callb(data));
	}
	*/
	/*
});	
	*/

		
	//});


/*
// Change the content of all <p> elements:
$(() => {
 // console.log("I'm using jQuery Jupi");

  // $("p.p1").html("Hello <b>world</b> !");

	$("#bt").click(function(){
		$("#mj1").html("<b>Poruka 111</b>");
	x	$("p.p1").html("<b>Poruka 777</b>");
	});
}
*/

/*

let getItems = (callb) => {
    $.ajax("/item")
        .done(data => callb(data));
}

let addItem = (name, room, quantity, inUsage, callb) => {
    $.ajax("/item", {data: { name, room, quantity, inUsage }, method: "POST"})
        .done(data => callb(data));
}

let deleteItem = (id) => {
    $.ajax({
        url: `/item/${id}`,
        type: 'DELETE',
        success: function(data) {
            fillTable(data.items);
        }
    });
}

let updateItem = (id, inUsage) => {
    $.ajax({
        url: `/item/${id}`,
        type: 'PUT',
        data: { inUsage },
        success: function(data) {
            fillTable(data.items);
        }
    });
}

let fillTable = ( items ) => {
    let tbody = $("#inventory-table > tbody")
    tbody.empty();
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
		
		inUsageStr = item.inUsage ? `<span style='color: blue;' class='clickable'>&#100753</span>`
						
        tbody.append(
            `<tr>
                <th scope='row'>${item.id}</th>
                <td>${item.name}</td>
                <td><button class="btn btn-outline-danger" onclick="deleteItem(${item.id})">Obriši</button></td>
            </tr>
            `
            )
    }   
}

$(() => {
    // čim se dokument učita, dohvati item zapise te ih dodaj na stranicu pomocu metode fillTable
    getItems((data) => {
        console.log(data)
        fillTable(data.items);
    });

    $("#inventory-form").submit((event) => {
        let name = event.target[0].value;

        event.target[0].value = name.value;
        event.target[1].value = " P2 ";
        event.target[2].value = " P3 ";
        event.target[3].checked = false;
        event.preventDefault();
        addItem(name, (data) => {
            fillTable(data.items)
        });
    });    
});
*/

// podatci = {"poruke":["Moja poruka 1...","Moja poruka 2..."]};

//  poruka = podatci.poruke[mj];
//  document.getElementById("rd1").innerHTML = poruka;
//  ++mj;
//  poruka = podatci.poruke[mj];
//  document.getElementById("rd2").innerHTML = poruka;
//  ++mj;

/*
 $(document).ready(function(){
  $("#bt").click(function(){
   // $("#rd5").text("Poruka 77...");
  });
   $("#bt").click(function(){
    $("#rd5").html("Poruka 777...");
  });
  $("#bt").click(function(){
    $("#rd5").val("Poruka 7777...");
  });
});
*/

// Spremanje podataka:
myObj = { name: "Osoba", eml: "osoba@gmail.com" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("podatci", myJSON);

// Slanje podataka:
tekst = localStorage.getItem("podatci");
obj = JSON.parse(tekst);
document.getElementById("ime").innerHTML = obj.name;
document.getElementById("email").innerHTML = obj.eml;

var un = unesi();
	
function unesi() {
  var o =  document.getElementById("txt1");
  var p =  document.getElementById("txt1").innerHTML;
  var q =  o.value;
  var d =  q.length; 
  
  var kol = poruke.length;
  document.getElementById("mjesto1").innerHTML = poruke.length;
  		
 // q = q+" "+mj+" | "+d+" znakova ";
 
  // var tablica = document.getElementById("t2");
	
  var jos = 500 - d;    
  if ( jos > 0 ) { 
     $("#rdbr").html( jos+" characters left. " ); }
  else { $("#rdbr").html( " Message to long - Unable to submit. " );  }
      
  if ( d>0 && d<500 ) { 
    if ( mj > 0 ){
    var tablica = document.getElementById("t2");
	var red = tablica.insertRow(mj);
	var cell1 = red.insertCell(0);
    cell1.innerHTML = q;
	// cell1.id = "poz"+mj;
    var lok = cell1.id; 
	
    document.getElementById(lok).height = "50px";
	document.getElementById(lok).style.textAlign = "center";
	document.getElementById(lok).style.borderBottom = "thin solid #BBBBAA";
	document.getElementById(lok).style.borderBottomColor = rgb(180, 180, 180);		
	
	// document.getElementById("poz").style.borderBottomWidth = "10px";
	// document.getElementById("poz").style.borderBottomColor = "#000040";	
	// document.getElementById("rd1").innerHTML = p;  	
	// rd2.innerHTML = p;  
	
	poruke.push(p);
	poruka = podatci.poruke[mj];		
	
	}
			
  }
  mj++;
  k++;
  
	document.getElementById("bt2").innerHTML = k;  	
	// document.getElementById("bt2").value = k;  	
	
		document.getElementById("bt3").innerHTML = mj;
	
	// var lk = document.getElementById("bt3").innerHTML;
   // if ( lk > 5 ) then { }
	// document.getElementById("bt3").value = mj;  	
}


/* 
var f1 = logfun(); 

function logfun() {
  document.getElementById("profil").style.fontSize = "xx large";
  document.body.style.backgroundColor = "transparent";
}

let getItems = (callb) => {
    $.ajax("/item")
        .done(data => callb(data));
}

let addItem = (name, room, quantity, inUsage, callb) => {
    $.ajax("/item", {data: { name, room, quantity, inUsage }, method: "POST"})
        .done(data => callb(data));
}

let deleteItem = (id) => {
    $.ajax({
        url: `/item/${id}`,
        type: 'DELETE',
        success: function(data) {
            fillTable(data.items);
        }
    });
}

let updateItem = (id, inUsage) => {
    $.ajax({
        url: `/item/${id}`,
        type: 'PUT',
        data: { inUsage },
        success: function(data) {
            fillTable(data.items);
        }
    });
}

let fillTable = (items) => {
    let tbody = $("#inventory-table > tbody")
    tbody.empty();
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        
        inUsageStr = item.inUsage ? `<span style='color: green;' class='clickable'>&#10003</span>
            <span style='color: lightgray;' class='clickable' onclick="updateItem(${item.id}, false)">&#10007</span>` : 
            `<span style='color: lightgray;' class='clickable' onclick="updateItem(${item.id}, true)">&#10003</span>
            <span style='color: red;' class='clickable'>&#10007</span>`

        tbody.append(
            `<tr>
                <th scope='row'>${item.id}</th>
                <td>${item.name}</td>
                <td>${item.room}</td>
                <td>${item.quantity}</td>
                <td>${inUsageStr}</td>
                <td><button class="btn btn-outline-danger" onclick="deleteItem(${item.id})">Obriši</button></td>
            </tr>
            `
            )
    }    
}

$(() => {
    // čim se dokument učita, dohvati item zapise te ih dodaj na stranicu pomocu metode fillTable
    getItems((data) => {
        console.log(data)
        fillTable(data.items);
    });

    $("#inventory-form").submit((event) => {
        let name = event.target[0].value;
        let room = event.target[1].value;
        let quantity = event.target[2].value;
        let inUsage = event.target[3].checked;

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].checked = false;
        event.preventDefault();
        addItem(name, room, quantity, inUsage, (data) => {
            fillTable(data.items)
        });
    });    
});

*/
