$(document).ready(show_cupcakes);

let cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];

let table = document.getElementById("cupcake-table")
function show_cupcakes(){
for(let i =0; i<cup_cakes.length ; i++){
  let tr =document.createElement("tr");
  let td1 =document.createElement("td");
  let td2 =document.createElement("td");
  let td3 = document.createElement("td")
  td1.innerHTML = cup_cakes[i].name
  td2.innerHTML = cup_cakes[i].calories
  td3.innerHTML = cup_cakes[i].weight
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  table.appendChild(tr)

  if(cup_cakes[i].calories == "high"){
    td2.style.backgroundColor = "red";
  }else if(cup_cakes[i].calories == "medium"){
    td2.style.backgroundColor = "orange"
  }else{
    td2.style.backgroundColor = "green"
  }
}
}




let customer =document.getElementById("customer-name");
let count =document.getElementById("count");
let type =document.getElementById("type");
let delivery =document.getElementById("delivery-time")
let allergies = document.getElementById("allergies")
let vailInputs = 0;

function validated(event){
  
    if(customer.value.length >= 5 && customer.value.length <= 16){
        document.getElementById("customer-note").innerHTML = "Okay!";
        document.getElementById("customer-note").style.color = "green";
        customer.style.borderColor = "green";
        vailInputs++;
    }else {
        document.getElementById("customer-note").innerHTML  = "The name must be between 5 and 16 character long";
        document.getElementById("customer-note").style.color = "red";
        customer.style.borderColor = "red"
    }
    if (count.value >= 1 && count.value <= 15){
        document.getElementById("count-note").innerHTML =    "Okay!";
        document.getElementById("count-note").style.color = "green";
        count.style.borderColor = "green";
        vailInputs++;
      } else{
        document.getElementById("count-note").innerHTML = "The count must be between 1 and 15 character long";
        document.getElementById("count-note").style.color = "red";
        count.style.borderColor = "red";
      }
      if(type.value == "none"){
        document.getElementById("type-note").innerHTML = "None is not accepted";
        document.getElementById("type-note").style.color = "red";
        type.style.borderColor = "red";
      } else {
        document.getElementById("type-note").innerHTML = "Okay";
        document.getElementById("type-note").style.color = "green";
        type.style.borderColor = "green";
        vailInputs++;
      }
      if(delivery.value == "none"){
        document.getElementById("delivery-note").innerHTML = "None is not accepted";
        document.getElementById("delivery-note").style.color = "red";
        delivery.style.borderColor = "red";
      } else {
        document.getElementById("delivery-note").innerHTML = "Okay";
        document.getElementById("delivery-note").style.color = "green";
        delivery.style.borderColor = "green";
        vailInputs++;
      }
      if(delivery.value == "4:00pm" && type.value == "chocolate"){
        document.getElementById("delivery-note").innerHTML = "Unfortunately Chocolate cupcakes cannot be delivered at 4pm";
        document.getElementById("delivery-note").style.color = "red";
        delivery.style.borderColor = "red";
    }
    if(allergies.value == "dairy-free" && type.value == "chocolate"){
        document.getElementById("allergies-note").innerHTML = "This type of cake is not dairy-free";
        document.getElementById("allergies-note").style.color = "red";
        allergies.style.borderColor = "red";
    }
    else if(allergies.value == "nut-free" && type.value == "pecan"){
        document.getElementById("allergies-note").innerHTML = "This type of cake is not nut-free";
        document.getElementById("allergies-note").style.color = "red";
        allergies.style.borderColor = "red"
      } else {
        document.getElementById("allergies-note").innerHTML = "Okay";
        document.getElementById("allergies-note").style.color = "green";
        allergies.style.borderColor = "green";
        vailInputs++;
      }

      if(vailInputs == 5){
        localStorage.setItem("user", customer.value)
      }else{
        event.preventDefault();
      }
     
     
      
    
}

function show_storage(){
  let userName = localStorage.getItem("user")
  document.querySelector("#welcome").innerHTML = `Welcome ${userName}`
}
