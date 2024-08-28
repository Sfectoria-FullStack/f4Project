
const cardDiv = document.querySelectorAll('.card');
console.log(cardDiv);

for (let i = 0; i < cardDiv.length; i++) {
    cardDiv[i].addEventListener('click', () => {
        console.log(i);
    })
}