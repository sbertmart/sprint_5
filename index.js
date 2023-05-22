var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var reportJokes = [];
var reportedAcudit = /** @class */ (function () {
    function reportedAcudit(acudit, score, date) {
        this.acudit = acudit;
        this.score = score;
        this.date = date;
    }
    return reportedAcudit;
}());
mostraTemps();
document.getElementById("botoAcudit").addEventListener('click', acuditRandom);
function acuditRandom() {
    var rand = Boolean(Math.round(Math.random()));
    if (rand == true) {
        mostraAcudit();
    }
    if (rand == false) {
        mostraAcudit2();
    }
}
function mostraAcudit() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var config, a, b, imagenUrl;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    config = {
                        headers: {
                            Accept: "application/json",
                        },
                    };
                    return [4 /*yield*/, fetch("https://icanhazdadjoke.com/", config)];
                case 1:
                    a = _b.sent();
                    return [4 /*yield*/, a.json()];
                case 2:
                    b = _b.sent();
                    document.getElementById("acudit").innerHTML = b.joke;
                    // ocultar gracias por puntuar
                    (_a = document.getElementById("gracies")) === null || _a === void 0 ? void 0 : _a.classList.add("oculto");
                    //mostrar botones puntuación
                    document.getElementById("botons").classList.add("d-block");
                    document.getElementById("botons").classList.remove("ocultar");
                    imagenUrl = "img/cuñaohead.png";
                    document.getElementById("cunao").src = imagenUrl;
                    document.getElementById("cunao").classList.add("shakeit");
                    //vuelve smiley    
                    setTimeout(function () {
                        document.getElementById("cunao").src = "img/smiley.png";
                        document.getElementById("cunao").classList.remove("shakeit");
                    }, "3000");
                    return [2 /*return*/];
            }
        });
    });
}
function puntuar(puntuacio) {
    var _a, _b;
    var textAcudit = (_a = document.getElementById("acudit")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var score = puntuacio;
    var date = new Date();
    var ISOdate = date.toISOString();
    var found = reportJokes.find(function (elemento) { return elemento.acudit == textAcudit; });
    if (found) {
        return alert("Aquest acudit ja ha sigut valorat");
    }
    var nouAcudit = new reportedAcudit(textAcudit, score, date);
    reportJokes.push(nouAcudit);
    //mostrar gracies per puntuar
    (_b = document.getElementById("gracies")) === null || _b === void 0 ? void 0 : _b.classList.remove("oculto");
    //ocultar puntuacio
    document.getElementById("botons").classList.remove("d-block");
    document.getElementById("botons").classList.add("ocultar");
    console.log(reportJokes);
}
// API acudits 1
function mostraAcudit2() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var a, b, imagenUrl;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch("https://api.chucknorris.io/jokes/random")];
                case 1:
                    a = _b.sent();
                    return [4 /*yield*/, a.json()];
                case 2:
                    b = _b.sent();
                    document.getElementById("acudit").innerHTML = b.value;
                    // ocultar gracias por puntuar
                    (_a = document.getElementById("gracies")) === null || _a === void 0 ? void 0 : _a.classList.add("oculto");
                    //mostrar botones puntuación
                    document.getElementById("botons").classList.add("d-block");
                    document.getElementById("botons").classList.remove("ocultar");
                    imagenUrl = "img/cuñaohead.png";
                    document.getElementById("cunao").src = imagenUrl;
                    document.getElementById("cunao").classList.add("shakeit");
                    //vuelve smiley    
                    setTimeout(function () {
                        document.getElementById("cunao").src = "img/smiley.png";
                        document.getElementById("cunao").classList.remove("shakeit");
                    }, "3000");
                    return [2 /*return*/];
            }
        });
    });
}
// API temps
function mostraTemps() {
    return __awaiter(this, void 0, void 0, function () {
        var APIKey, temps, dato, temperatura, tiempo, imgURL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    APIKey = "c619c91872a2d9650b01d3f060cb3768";
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=".concat(APIKey, "&units=metric&lang=ca"))];
                case 1:
                    temps = _a.sent();
                    return [4 /*yield*/, temps.json()];
                case 2:
                    dato = _a.sent();
                    console.log(dato);
                    temperatura = dato.main.temp;
                    tiempo = dato.weather[0].description;
                    imgURL = getImg(tiempo);
                    console.log(imgURL);
                    document.getElementById("meteo").innerHTML = "La temperatura a Barcelona es de " + "<b>" + temperatura + "</b>" + " C°";
                    document.getElementById("iconosmeteo").src = imgURL;
                    console.log(temperatura + " " + tiempo);
                    return [2 /*return*/];
            }
        });
    });
}
function getImg(tiempo) {
    var img;
    if (tiempo == "nuvolositat variable" || tiempo == "núvols dispersos") {
        img = "img/sol nuvol.png";
    }
    return img;
}
