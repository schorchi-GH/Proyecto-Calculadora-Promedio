const form = document.getElementById('form-actividad');
const imgAprobado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />'
const imgDesaprobado = '<img src="./images/reprovado.png" alt="Emoji Triste" />'
let líneas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNombreActividad = document.getElementById('nombre-actividad');
    const inputNotaActividad = document.getElementById('nota-actividad');

    let línea = '<tr>'
    línea += `<td>${inputNombreActividad.value} </td>`;
    línea += `<td>${inputNotaActividad.value}</td>`;
    línea += `<td>${inputNotaActividad.value >= 7 ? imgAprobado : imgDesaprobado}</td>`;
    línea += '</tr>';

    líneas += línea;

    const cuerpoTabla = document.querySelector('tbody');
    cuerpoTabla.innerHTML  = líneas;

    inputNombreActividad.value = '';
    inputNotaActividad.value = '';
});