let vara = document.querySelector('#vara');
let submit_btn = document.querySelector('#submit_btn');
let undo_btn = document.querySelector('#undo_btn');
let list_pos = document.querySelector('#listPos');

function ListItem (checked, item, enode){
    this.checked = checked;
    this.item = item;
    this.elem = enode;
} 

let list = [];



const populate_list = () => {
list_pos.innerHTML = '';
list.forEach(element => {
    let e = document.createElement('div');
    e.setAttribute('class', 'form-check');
    e.innerHTML  = `<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ${element.checked ? 'checked':''}>
    <label class="form-check-label" for="flexCheckDefault">
      ${element.item}
    </label>`
    element.enode = e;
    list_pos.appendChild(e);
    let c = e.querySelector('input');

        c.addEventListener('click', () =>  {
            
            let c = element.enode.querySelector('input');
            let g = element.enode.querySelector('label');
            
         if(c.checked) g.setAttribute('class', 'form-check-label checked');
        else g.setAttribute('class', 'form-check-label');
        element.checked = c.checked;       
    });
    
});



}


const submit_action = () => {
    /* let i = iField.value;
    let j = jField.value;
    let n = nField.value;
    result.innerHTML = '  '; */
    list.push(new ListItem(false, vara.value));

    populate_list();
    
}

const undo_action = () => {
    list.pop();
    
    populate_list();
}


submit_btn.addEventListener('click', function(e){
    e.preventDefault();
    submit_action()
});

undo_btn.addEventListener('click', function(e){
    e.preventDefault();
    undo_action()
});
