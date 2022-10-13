
const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('button-addon2');
const listaTareas = document.getElementById('lista-tareas');

document.addEventListener('DOMContentLoaded', obtenerTareas);

btnAgregar.addEventListener('click', agregarTarea);

// funcion agregar tarea

function agregarTarea(event) {
    event.preventDefault();
    //tarea li
    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerText = inputTarea.value
    
    // agregar tarea al localstorage
    guardarLocalStorage(inputTarea.value);

    // boton tarea completada
    const btnCompletado = document.createElement('button');
    btnCompletado.type = 'button'
    btnCompletado.classList.add('btn');
    btnCompletado.classList.add('btn-primary');
    btnCompletado.classList.add('m-3');
    btnCompletado.innerHTML = '<i class="fa-solid fa-check"></i>'
    nuevaTarea.appendChild(btnCompletado);
    btnCompletado.addEventListener('click', () => {
        nuevaTarea.classList.add('tachado');
    })
    
    //boton eliminar tarea
    const btnEliminar = document.createElement('button');
    btnEliminar.type = 'button'
    btnEliminar.classList.add('btn');
    btnEliminar.classList.add('btn-primary');

    btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnEliminar.addEventListener('click', () => {
        nuevaTarea.remove();
        btnEliminar.remove();
        eliminarTareasLocalStorage(nuevaTarea)

        //libreria
        Toastify({
            text: "Deleted task",
            duration: 3000,
            
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "right", 
            
            style: {
              background: "linear-gradient(to right, #AC93A2, #8D7290)",
            },
            
        }).showToast();
    })
    
    nuevaTarea.appendChild(btnEliminar);
    
    //agregar a la lista
    listaTareas.appendChild(nuevaTarea)
    inputTarea.value = ''
}

//guardar en local storage
function guardarLocalStorage (tarea) {
    let tareas;
    
    tareas = JSON.parse(localStorage.getItem('tareas')) || []

    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}


//obtener tareas del localstorage

function obtenerTareas () {
    let tareas;
    tareas = JSON.parse(localStorage.getItem('tareas')) || []
    
    tareas.forEach(function(tarea){
        //tarea li
        const nuevaTarea = document.createElement('li');
        nuevaTarea.innerText = tarea;
        
        // boton tarea completada
        const btnCompletado = document.createElement('button');
        btnCompletado.type = 'button'
        btnCompletado.classList.add('btn');
        btnCompletado.classList.add('btn-primary');
        btnCompletado.classList.add('m-3');
        btnCompletado.innerHTML = '<i class="fa-solid fa-check"></i>'
        nuevaTarea.appendChild(btnCompletado);
        
        btnCompletado.addEventListener('click', () => {
            nuevaTarea.classList.add('tachado');
        })
        
        //boton eliminar tarea
        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button'
        btnEliminar.classList.add('btn');
        btnEliminar.classList.add('btn-primary');

        btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnEliminar.addEventListener('click', () => {
            nuevaTarea.remove();
            btnEliminar.remove();
            eliminarTareasLocalStorage(nuevaTarea)

            //libreria
            Toastify({
                text: "Deleted task",
                duration: 3000,
                
                newWindow: true,
                close: true,
                gravity: "bottom", 
                position: "right", 
                
                style: {
                  background: "linear-gradient(to right, #AC93A2, #8D7290)",
                 
                },
                
            }).showToast();
        })
        
        nuevaTarea.appendChild(btnEliminar);
        
        //agregar a la lista
        listaTareas.appendChild(nuevaTarea)
    })
}

//eliminar tarea del localstorage

function eliminarTareasLocalStorage (tarea) {
    let tareas;
    tareas = JSON.parse(localStorage.getItem('tareas')) || []

    const tareaIndex = tarea.innerText;
    tareas.splice(tareas.indexOf(tareaIndex), 1);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

