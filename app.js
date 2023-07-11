const agregar = document.querySelector('#agregar');
const input = document.getElementsByTagName('input')[0];
const vacio = document.querySelector('#vacio');
const ul = document.querySelector('ul');

agregar.addEventListener('click', (e) => {
  e.preventDefault();
  const texto = input.value;
  if(texto != ''){
    const li = document.createElement('li');
  const p = document.createElement('p');
  li.appendChild(p);
  li.appendChild(borrar())
  ul.appendChild(li);
  p.textContent = texto;
  vacio.style.display = "none";
  input.value = ''
  }
});

function borrar(){
    const botonBorrar = document.createElement('button')
    botonBorrar.className = 'borrar'
    botonBorrar.textContent = 'X'
    botonBorrar.addEventListener('click', (e)=> {
        const item = e.target.parentElement
        ul.removeChild(item)
        const items = document.querySelectorAll('li')
        if(items.length === 0){
            vacio.style.display = "block"
        }
    
    })
    return botonBorrar
}