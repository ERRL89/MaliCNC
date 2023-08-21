let texto = ""

document.addEventListener("DOMContentLoaded", function(){
let numero_lapiz = document.getElementById("num_lapiz")
let precio_grabado = document.getElementById("precio_grabado")

numero_lapiz.addEventListener("input", multiplicacion)

function multiplicacion() {
    const result = parseFloat(numero_lapiz.value) * 2
    precio_grabado.value = "$"+result
}})


    function agregar() {
        texto = document.getElementById("texto_lapiz").value
        document.getElementById("textoenlapiz").value = texto
        let largo_texto = texto.length

        if (largo_texto > 25) {
            alert("El texto a grabar no debe ser mayor a 25 caracteres")
            document.getElementById("textoenlapiz").value = texto.substr(0, 25)
            document.getElementById("texto_lapiz").value = texto.substr(0, 25)
        }
    }

    function tipo_letra() {
        let seleccion_letra = document.getElementById("sel_letra")
        let letra = seleccion_letra.options[seleccion_letra.selectedIndex].value
        console.log(letra)
        document.getElementById("textoenlapiz").style.fontFamily = letra
    }

    function limpiar() {
        location.reload()
    }

    function agregar_imagen1() {
        var img = "smart_toy"
        document.getElementById("variable").innerHTML = img

    }

    function agregar_imagen2() {
        var img = "mood"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen3() {
        var img = "rocket_launch"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen4() {
        var img = "star"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen5() {
        var img = "pets"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen6() {
        var img = "stars"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen7() {
        var img = "cruelty_free"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen8() {
        var img = "shopping_basket"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen9() {
        var img = "sports_esports"
        document.getElementById("variable").innerHTML = img
    }

    function agregar_imagen10() {
        var img = "mode_night"
        document.getElementById("variable").innerHTML = img
    }

