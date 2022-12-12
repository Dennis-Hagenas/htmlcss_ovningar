let result = document.querySelector('#result');
let iField = document.querySelector('#i');
let jField = document.querySelector('#j');
let nField = document.querySelector('#n');
let form = document.querySelector('#inputForm');
let submit_btn = document.querySelector('#submit_btn');


iField.value = 3;
jField.value = 4;
nField.value = 100;
result.innerHTML = '  ';



const submit_action = () => {
    let i = iField.value;
    let j = jField.value;
    let n = nField.value;
    result.innerHTML = '  ';

    for (let index = 1; index <= n; index++) {
        if (((index % i)==0) && ((index % j)==0)) result.innerHTML += '<br>bish bosh</br>';
        else
        if ((index % i)==0)  result.innerHTML += '<br>bish</br>';
        else
        if ((index % j)==0) result.innerHTML += '<br>bosh</br>';
        else result.innerHTML += `<br>${index}</br>`;
    }
}

submit_btn.addEventListener('click', function(e){
    e.preventDefault();
    submit_action()
});



