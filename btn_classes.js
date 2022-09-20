//agregar color a la nota

//botones de colores:

const btnPrimary = document.getElementById('btn-primary');
const btnSuccess = document.getElementById('btn-success');
const btnSecondary = document.getElementById('btn-secondary');
const btnInfo = document.getElementById('btn-info');
const form = document.getElementById('form')

btnPrimary.addEventListener('click', () => {
    form.classList.add('primary')

})

btnSuccess.addEventListener('click', () => {
    form.classList.add('success')

})

btnSecondary.addEventListener('click', () => {
    form.classList.add('secondary')

})

btnInfo.addEventListener('click', () => {
    form.classList.add('info')

})