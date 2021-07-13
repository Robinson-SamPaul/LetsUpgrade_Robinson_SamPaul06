let cards = [
    {
        image : "./Images/Loki1.jpg",
        value : 1,
        status : "closed"
    },
    {
        image : "./Images/Loki1.jpg",
        value : 1,
        status : "closed"
    },
    {
        image : "./Images/Loki2.jpg",
        value : 2,
        status : "closed"
    },
    {
        image : "./Images/Loki2.jpg",
        value : 2,
        status : "closed"
    },
    {
        image : "./Images/Loki3.jpg",
        value : 3,
        status : "closed"
    },
    {
        image : "./Images/Loki3.jpg",
        value : 3,
        status : "closed"
    },
    {
        image : "./Images/Loki4.jpg",
        value : 4,
        status : "closed"
    },
    {
        image : "./Images/Loki4.jpg",
        value : 4,
        status : "closed"
    },
    {
        image : "./Images/Loki5.jpg",
        value : 5,
        status : "closed"
    },
    {
        image : "./Images/Loki5.jpg",
        value : 5,
        status : "closed"
    },
]

let temp;
for(let i = cards.length-1; i >= 0; i--){

    let j = Math.floor(Math.random()*(i + 1));

    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let copyCards = cards;

function displayCards(data){
    let cardsStr = "";

    data.forEach(function(card, index){
        cardsStr += `
            <div class = "card" style = "background-image:url('${card.image}')">
                <div class = "overlay ${card.status}" onclick = "openCard(${index})"></div>
            </div>`;
    });

    document.getElementById('cards').innerHTML = cardsStr;
}

function newGame(){
    alert("You won the game");
    location.reload();
}

displayCards(cards);

console.log(cards)


let cardCount = 1;
let val1 = null, val2 = null, val3 = null;
let a = null,b = null,c = null;
let score = 0;

function openCard(index){

    cards[index].status = "opened";
    if(cardCount === 1){
        a=cards[index];
        val1 = a.value;
        cardCount++;
    }

    else if(cardCount === 2){
        b = cards[index];
        val2 = b.value;

        if(val1 === val2){
            score++;
            document.getElementById('score').innerText = score;
            cardCount = 1;
            a = null;
            b = null;
        }

        else{
            cardCount++;
        }
    }
    
    else if(cardCount === 3){
        c = cards[index];
        val3 = c.value;

        if(val1 === val3){
            score++;
            document.getElementById('score').innerText = score;
            cardCount = 1;
            b.status = "closed"
            a = null;
            b = null;
            c = null;
        }

        else if(val2 === val3){
            score++;
            document.getElementById('score').innerText = score;
            cardCount = 1;
            a.status = "closed"
            a = null;
            b = null;
            c = null;
        }
    
        else{
            alert("Game Over")
            location.reload();
        }
    }

    displayCards(cards);
    if(document.getElementById('score').innerText == 5 || cards.status === "opened"){
        newGame();
    }
}