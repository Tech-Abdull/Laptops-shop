var LapOne = {
    Laptop: "/images/hp.png",
    name :"HP Elitebook",
    price : 98000,
    OriginalPrice: 100459,
    itemId:"I001" 
}
document.getElementById("hp").src =  LapOne.Laptop;
document.getElementById("name1").innerText = LapOne.name
document.getElementById("price1").innerText = LapOne.price
document.getElementById("original1").innerText = LapOne.OriginalPrice

var LapTwo = {
    Laptop: "/images/dell.webp",
    name :"DELL",
    price : 90000,
    OriginalPrice: 10000,
    itemId:"I002" 
}
document.getElementById("dell").src =  LapTwo.Laptop;
document.getElementById("name2").innerText = LapTwo.name
document.getElementById("price2").innerText = LapTwo.price
document.getElementById("original2").innerText = LapTwo.OriginalPrice


var LapThree = {
    Laptop: "/images/lenovo.png",
    name :"LENOVO",
    price : 70000,
    OriginalPrice: 90000,
    itemId:"I003" 
}
document.getElementById("lenovo").src =  LapThree.Laptop;
document.getElementById("name3").innerText = LapThree.name
document.getElementById("price3").innerText = LapThree.price
document.getElementById("original3").innerText = LapThree.OriginalPrice

var LapFour = {
    Laptop: "/images/mac.jpg",
    name :"MacBook",
    price : 170000,
    OriginalPrice: 190000,
    itemId:"I004" 
}
document.getElementById("mac").src =  LapFour.Laptop;
document.getElementById("name4").innerText = LapFour.name
document.getElementById("price4").innerText = LapFour.price
document.getElementById("original4").innerText = LapFour.OriginalPrice

var LapFive = {
    Laptop: "/images/toshiba.jpg",
    name :"Toshiba",
    price : 50000,
    OriginalPrice: 65000,
    itemId:"I005" 
}
document.getElementById("Toshiba").src =  LapFive.Laptop;
document.getElementById("name5").innerText = LapFive.name
document.getElementById("price5").innerText = LapFive.price
document.getElementById("original5").innerText = LapFive.OriginalPrice

var LapSix = {
    Laptop: "/images/sam2.png",
    name :"Samsung",
    price : 150000,
    OriginalPrice: 165000,
    itemId:"I006" 
}
document.getElementById("samsung").src =  LapSix.Laptop;
document.getElementById("name6").innerText = LapSix.name
document.getElementById("price6").innerText = LapSix.price
document.getElementById("original6").innerText = LapSix.OriginalPrice


document.getElementById("lap1").onclick = function(){
    window.location.href = "select.html" + "?" + LapOne.itemId
}
document.getElementById("lap2").onclick = function(){
    window.location.href = "select.html" + "?" + LapTwo.itemId
}
document.getElementById("lap3").onclick = function(){
    window.location.href = "select.html" + "?" + LapThree.itemId
}
document.getElementById("lap4").onclick = function(){
    window.location.href = "select.html" + "?" + LapFour.itemId
}
document.getElementById("lap5").onclick = function(){
    window.location.href = "Select.html" + "?" + LapFive.itemId
}
document.getElementById("lap6").onclick = function(){
    window.location.href = "select.html" + "?" + LapSix.itemId
}


