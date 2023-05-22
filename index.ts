const reportJokes = [];

class reportedAcudit {
    constructor(acudit, score, date) {
        this.acudit = acudit;
        this.score = score;
        this.date = date;
    } 
}

document.getElementById("botoAcudit").addEventListener('click', mostraAcudit)

async function mostraAcudit() {

    //mostrar botones puntuación
    document.getElementById("botons")?.classList.add= "d-flex";
    document.getElementById("botons")?.classList.remove= "ocultar";

    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com/", config);
    let b = await a.json()
    document.getElementById("acudit").innerHTML = b.joke;

    var imagenUrl = "img/cuñaohead.png"
    document.getElementById("cunao").src = imagenUrl;
    document.getElementById("cunao").classList.add("shakeit");



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

    console.log(reportJokes);

}



