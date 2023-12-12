const form = document.getElementById('form-actividad');
const imgAprobado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />'
const imgDesaprobado = '<img src="./images/reprovado.png" alt="Emoji Triste" />'
const actividades = [];
const notas = [];
const spanAprobado = '<span class="resultado aprobado">Aprobado</span>';
const spanDesaprobado = '<span class="resultado desaprobado">Desaprobado</span>';
const notaMínima = parseFloat(prompt("¿Cuál es la nota mínima?"))

let líneas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    agregaLínea();
    actualizarTabla();
    actualizaPromedio();
});

function agregaLínea() {
    const inputNombreActividad = document.getElementById('nombre-actividad');
    const inputNotaActividad = document.getElementById('nota-actividad');

    if (actividades.includes(inputNombreActividad.value)){
        alert(`La actividad: ${inputNombreActividad.value} ya ha sido insertada`)
    } else {
    actividades.push(inputNombreActividad.value);
    notas.push(parseFloat(inputNotaActividad.value));

    let línea = '<tr>'
    línea += `<td>${inputNombreActividad.value} </td>`;
    línea += `<td>${inputNotaActividad.value}</td>`;
    línea += `<td>${inputNotaActividad.value >= notaMínima ? imgAprobado : imgDesaprobado}</td>`;
    línea += '</tr>';

    líneas += línea;
    }

    inputNombreActividad.value = '';
    inputNotaActividad.value = '';
}

function actualizarTabla() {
    const cuerpoTabla = document.querySelector('tbody')
    cuerpoTabla.innerHTML = líneas;
}

function actualizaPromedio() {
    const promedio = calculaPromedio();

    document.getElementById('promedio-final').innerHTML = promedio;
    document.getElementById('promedio-resultado').innerHTML = promedio >= notaMínima ? spanAprobado : spanDesaprobado;
}

function calculaPromedio() {
    let sumaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }    
    return sumaNotas / notas.length;
}