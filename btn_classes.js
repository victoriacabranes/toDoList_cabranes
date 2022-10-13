//agregar color a la nota

//botones de colores:

const btnPrimary = document.getElementById('btn-primary');
const btnSuccess = document.getElementById('btn-success');
const btnSecondary = document.getElementById('btn-secondary');
const btnInfo = document.getElementById('btn-info');
const form = document.getElementById('form')

//funcion click event listener

btnPrimary.addEventListener('click', () => {
    form.style.backgroundColor = '#ffd6ff'
    form.style.borderColor = '#ffd6ff'
    document.getElementById('button-addon2').style.backgroundColor = '#dd96a5'
    
})

btnSuccess.addEventListener('click', () => {
    form.style.backgroundColor = '#bbd0ff'
    form.style.borderColor = '#bbd0ff'
    document.getElementById('button-addon2').style.backgroundColor = '#4d679e'

})


btnInfo.addEventListener('click', () => {
    form.style.backgroundColor = '#ffdab9'
    form.style.borderColor = '#ffdab9'
    document.getElementById('button-addon2').style.backgroundColor = '#dd9e67'
    
})

btnSecondary.addEventListener('click', () => {
    form.style.backgroundColor = 'white'
    form.style.borderColor = 'white'
    document.getElementById('button-addon2').style.backgroundColor = '#a09e9d'

})