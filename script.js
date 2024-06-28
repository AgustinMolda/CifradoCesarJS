const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');


const shiftMessage = () =>{
    const wordArray = [...inputOriginal.value.toUpperCase()];
    alert(wordArray);
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shiftMessage();
}

cifrador.onsubmit = submit;
