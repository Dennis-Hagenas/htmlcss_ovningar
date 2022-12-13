let vara = document.querySelector('#vara');
let submit_btn = document.querySelector('#submit_btn');
let undo_btn = document.querySelector('#undo_btn');
let list_pos = document.querySelector('#listPos');

function ListItem (checked, item){
    this.checked = checked;
    this.item = item;
} 

let list = [];



const populate_list = () => {
let output = '';
list.forEach(element => {
    output += `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ${element.checked ? 'checked':''}>
    <label class="form-check-label" for="flexCheckDefault">
      ${element.item}
    </label>
  </div>`});
list_pos.innerHTML = output;
let list_html = list_pos.querySelectorAll('div');
console.log(list_html);

/* list_html.forEach(hdiv => {
    hdiv.addEventListener(e, function(e){
    });
}); */
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
