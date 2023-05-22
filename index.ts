const reportJokes = [];

class reportedAcudit {
    constructor(acudit, score, date) {
        this.acudit = acudit;
        this.score = score;
        this.date = date;
    } 
}

mostraTemps();


document.getElementById("botoAcudit").addEventListener('click', acuditRandom)


function acuditRandom() {
    const rand = Boolean(Math.round(Math.random()));

    if (rand == true) {
        mostraAcudit();
    }
    if (rand == false) {
        mostraAcudit2();
    }
}

async function mostraAcudit() {

    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com/", config);
    let b = await a.json()
    document.getElementById("acudit").innerHTML = b.joke;

    // ocultar gracias por puntuar
    document.getElementById("gracies")?.classList.add("oculto");

    //mostrar botones puntuación
    document.getElementById("botons").classList.add("d-block");
    document.getElementById("botons").classList.remove("ocultar");

    //mostrar imagen risitas
    var imagenUrl = "img/cuñaohead.png"
    document.getElementById("cunao").src = imagenUrl;
    document.getElementById("cunao").classList.add("shakeit");


    //vuelve smiley    
    setTimeout(() => {
        document.getElementById("cunao").src = "img/smiley.png";
        document.getElementById("cunao").classList.remove("shakeit");
      }, "3000");   

}

function puntuar(puntuacio) {

    let textAcudit = document.getElementById("acudit")?.innerHTML;
    let score = puntuacio;
    const date = new Date();
    let ISOdate = date.toISOString();

    let found = reportJokes.find(elemento => elemento.acudit == textAcudit);
    if (found) {
        return alert("Aquest acudit ja ha sigut valorat");
    }

    let nouAcudit = new reportedAcudit(textAcudit, score, date);
    reportJokes.push(nouAcudit);

    //mostrar gracies per puntuar
    document.getElementById("gracies")?.classList.remove("oculto");

    //ocultar puntuacio
    document.getElementById("botons").classList.remove("d-block");
    document.getElementById("botons").classList.add("ocultar");

    console.log(reportJokes);

}

// API acudits 1

async function mostraAcudit2() {


    let a = await fetch("https://api.chucknorris.io/jokes/random");
    let b = await a.json()
    document.getElementById("acudit").innerHTML = b.value;

    // ocultar gracias por puntuar
    document.getElementById("gracies")?.classList.add("oculto");

    //mostrar botones puntuación
    document.getElementById("botons").classList.add("d-block");
    document.getElementById("botons").classList.remove("ocultar");

    //mostrar imagen risitas
    var imagenUrl = "img/cuñaohead.png"
    document.getElementById("cunao").src = imagenUrl;
    document.getElementById("cunao").classList.add("shakeit");


    //vuelve smiley    
    setTimeout(() => {
        document.getElementById("cunao").src = "img/smiley.png";
        document.getElementById("cunao").classList.remove("shakeit");
      }, "3000");   
    
}



// API temps

async function mostraTemps() {

   let APIKey = "c619c91872a2d9650b01d3f060cb3768"
   
    let temps = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${APIKey}&units=metric&lang=ca`);
    let dato = await temps.json();

    console.log(dato);

    let temperatura = dato.main.temp;
    let tiempo = dato.weather[0].description;

    let imgURL = getImg(tiempo);
    console.log(imgURL);

    document.getElementById("meteo").innerHTML = "La temperatura a Barcelona es de " + "<b>"+temperatura+"</b>" + " C°";
    document.getElementById("iconosmeteo").src = imgURL;

    console.log(temperatura + " " + tiempo);

}

function getImg(tiempo) {

    let img;
    if (tiempo == "nuvolositat variable" || tiempo == "núvols dispersos") {        
        img = "img/sol nuvol.png";
    }
    return img;
}



