const Numb = Math.floor(Math.random() * 100) + 1;
console.log(Numb)
function check() {
    let inputNumb = parseFloat(document.getElementById("inputNumb").value);
    let message = document.getElementById("mess");
    arrayGede = ["angkamu kegedean woi",
        "kecilin lagi angka tebakanmu",
        "gede banget angka tebakanmu, kecilin lagi!", "jangan kegedean tebakan angkanya"];
    const acakGede = arrayGede[Math.floor(Math.random() * arrayGede.length)];
    arrayKecil = ["kecil banget angka tebakanmu, gedein lagi!",
        "angkamu kekecilan woi",
        "gedein lagi angka tebakanmu!"];
    const acakKecil = arrayKecil[Math.floor(Math.random() * arrayKecil.length)];
    
    if (isNaN(inputNumb)) {
        message.innerHTML = "harap masukkan angka dengan benar"
        message.style.color = "red"
    } else {
        if (Numb < inputNumb) {
            message.innerHTML = acakGede
            message.style.color = "#FFC300"
        } else if (Numb > inputNumb) {
            message.innerHTML = acakKecil
            message.style.color = "#FFC300"
        } else {
            message.innerHTML = "tebakanmu benar! angka yang saya maksud adalah " + Numb
            message.style.color = "green"
        }
    }
}