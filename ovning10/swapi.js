let input_text = document.querySelector('#input_text');
let submit_btn = document.querySelector('#submit_btn');
let output = document.querySelector('#output');

submit_btn.addEventListener('click', function(e){
    e.preventDefault();
    getApi();
});



function getApi(){
    let fullUri = 'https://www.swapi.tech/api/people/?name=' + input_text.value;
    
    fetch(fullUri).then(res => res.json())
    .then(data => 
    {
        let result = data.result[0];
        console.log(result)
        let s = `${result.properties.name},  Height: ${result.properties.height}, Hair color: ${result.properties.hair_color}, Mass: ${result.properties.mass},  Gender: ${result.properties.gender}`;
        output.innerHTML += s + '\n';
    })
    .catch(err => console.log(err))
}
