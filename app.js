const btn = document.querySelector('#btn-flag');
const txt = document.querySelector('#text-flag');

const actionBtn = ()=>{
    //Flag para ganar un punto en el parcial
    txt.innerHTML = 'FLAG{gatos_dominaran_el_mundo}';
}

btn.addEventListener('click' , actionBtn);