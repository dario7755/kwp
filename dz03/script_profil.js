 
var podatci, poruka, p, myObj, myJSON, tekst, obj;
var poruke = [" "];
var mj = 1;
var k = 0;

// JS DOM 

function  dom1(){  
	document.getElementById("mjesto2").innerHTML = " --- NEW MJESTO 2 ! ---"; 

	var element = document.getElementById("mjesto1");
	element.innerHTML = " ___ NEW  1 !  ___ "; 
}


 function izbroj() { 
	var o =  document.getElementById("txt1");
	var p =  document.getElementById("txt1").innerHTML;
	var q =  ("#txt1").val();
	var d =  ("#txt1").length(); 
  
	var kol = ("#rd1").length(); 		
	 
	document.getElementById("rdbr").innerHTML=500-kol;	  			
	
  } // izbroj 
   

// JSON Spremanje podataka:
myObj = { name: "Osoba", eml: "osoba@gmail.com" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("podatci", myJSON);

// Slanje podataka:
tekst = localStorage.getItem("podatci");
obj = JSON.parse(tekst);

document.getElementById("ime").innerHTML = obj.name;
// document.getElementById("ime").value = obj.name;
document.getElementById("email").innerHTML = obj.eml;

 
var f1 = logfun(); 

function logfun() {
  document.getElementById("log").style.fontSize = "xx large";
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
    // kad se dokument učita, dohvati item zapise te ih dodaj na stranicu pomocu metode fillTable
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


