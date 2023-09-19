let color   = document.getElementById("szinkocka").value;
console.log("color:"+color);



function myFunction() {
    let color   = document.getElementById("szinkocka").value;
    console.log("color:"+color);
    let szam=document.getElementById("szam").value;
    console.log("szam"+szam)
    let budy = document.querySelector(".elem"+szam)
    budy.style.setProperty("background-color", color) 
}








