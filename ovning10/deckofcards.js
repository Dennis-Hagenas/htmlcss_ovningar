let card_display = document.querySelector('#card_display');
let submit_btn = document.querySelector('#submit_btn');

submit_btn.addEventListener('click', function(e){
    e.preventDefault();
    getApi();
});



function getApi(){
    let fullUri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
    
    fetch(fullUri).then(res => res.json())
    .then(data => 
    {
        let result = data.cards[0];
        
        card_display.innerHTML = '';

        let h2 = document.createElement('h2');
        h2.innerHTML = `${result.value} of ${result.suit}`;

        let img = document.createElement('img');
        img.setAttribute('src', result.image);

        card_display.appendChild(h2);
        card_display.appendChild(img);

    })
    .catch(err => console.log(err))
}
