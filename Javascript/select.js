var LapOne = {
    Laptop: "/images/hp.png",
    name :"HP Elitebook",
    price : 98000,
    OriginalPrice: 100459,
    itemId:"I001" 
}
var LapTwo = {
    Laptop: "/images/dell.webp",
    name :"DELL",
    price : 90000,
    OriginalPrice: 10000,
    itemId:"I002" 
}
var LapThree = {
    Laptop: "/images/lenovo.png",
    name :"LENOVO",
    price : 70000,
    OriginalPrice: 90000,
    itemId:"I003" 
}
var LapFour = {
    Laptop: "/images/mac.jpg",
    name :"MacBook",
    price : 170000,
    OriginalPrice: 190000,
    itemId:"I004" 
}
var LapFive = {
    Laptop: "/images/toshiba.jpg",
    name :"Toshiba",
    price : 50000,
    OriginalPrice: 65000,
    itemId:"I005" 
}
var LapSix = {
    Laptop: "/images/sam2.png",
    name :"Samsung",
    price : 150000,
    OriginalPrice: 165000,
    itemId:"I006" 
}

var selectId = decodeURIComponent (window.location.search)
var selectedItem = selectId.substring(1)

if(selectedItem == LapOne.itemId) {
    document.getElementById("hp").src = LapOne.Laptop
    document.getElementById("name1").innerText = LapOne.name
    document.getElementById("price1").innerText = LapOne.price
    document.getElementById("original1").innerText = LapOne.OriginalPrice  
    var cost =  LapOne.price 
    Qty(cost)
}

else if(selectedItem == LapTwo.itemId){
    document.getElementById("hp").src = LapTwo.Laptop
    document.getElementById("name1").innerText = LapTwo.name
    document.getElementById("price1").innerText = LapTwo.price
    document.getElementById("original1").innerText = LapTwo.OriginalPrice
    var cost =  LapTwo.price 
    Qty(cost)
  
}
else if(selectedItem == LapThree.itemId){
    document.getElementById("hp").src = LapThree.Laptop
    document.getElementById("name1").innerText = LapThree.name
    document.getElementById("price1").innerText = LapThree.price
    document.getElementById("original1").innerText = LapThree.OriginalPrice
    var cost =  LapThree.price 
    Qty(cost)
  
}
else if(selectedItem == LapFour.itemId){
    document.getElementById("hp").src = LapFour.Laptop
    document.getElementById("name1").innerText = LapFour.name
    document.getElementById("price1").innerText = LapFour.price
    document.getElementById("original1").innerText = LapFour.OriginalPrice
    var cost =  LapFour.price 
    Qty(cost)
  
}
else if(selectedItem == LapFive.itemId){
    document.getElementById("hp").src = LapFive.Laptop
    document.getElementById("name1").innerText = LapFive.name
    document.getElementById("price1").innerText = LapFive.price
    document.getElementById("original1").innerText = LapFive.OriginalPrice
    var cost =  LapFive.price 
    Qty(cost)
  
}
else if(selectedItem == LapSix.itemId){
    document.getElementById("hp").src = LapSix.Laptop
    document.getElementById("name1").innerText = LapSix.name
    document.getElementById("price1").innerText = LapSix.price
    document.getElementById("original1").innerText = LapSix.OriginalPrice
    var cost =  LapSix.price 
    Qty(cost)
  
}

function Qty(cost) {
    document.getElementById("quantity").onkeyup = function (){
       let  quantity = document.getElementById("quantity").value
        let amount = cost
        if(quantity > 1){

            total = quantity * amount
            document.getElementById("total").innerText = total
            UserLocation(total)
        }
       else if(quantity == 1){
        total = amount
        document.getElementById("total").innerText = total
        UserLocation(total)
    }

}
}

function UserLocation(total){
    document.getElementById("location").onchange = function(){
        let delivery = document.getElementById("location").value
        let Karen = 500
        let Muthaiga = 300
        let Machakos = 600

        if (delivery == "Karen" ){
            document.getElementById("total").innerText = Karen + total
        }
        else if (delivery == "Muthaiga"){
            document.getElementById("total").innerText = Muthaiga + total
        }
        else if (delivery == "Machakos"){
            document.getElementById("total").innerText = Machakos + total
        }
        else if (delivery == " "){
            document.getElementById("total").innerText = total
        }


    }

}
