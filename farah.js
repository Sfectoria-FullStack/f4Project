const cardData = [
    { photo: "photo1.jpg", blog: "This is blog content 1" },
    { photo: "photo2.jpg", blog: "This is blog content 2" },
    { photo: "photo3.jpg", blog: "This is blog content 3" },
    { photo: "photo4.jpg", blog: "This is blog content 4" },
    { photo: "photo5.jpg", blog: "This is blog content 5" },
    { photo: "photo6.jpg", blog: "This is blog content 6" },
  ];
  // Get the container where the cards will be inserted
const cardContainer = document.getElementById("card-container");
// Loop through the card data array and create cards
cardData.forEach((card) => {// Create a new div element for each card //Loop Through Data: The forEach method is used to loop through each item in the cardData array.
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "m-2");
    cardDiv.style.width = "18rem"; // Set card width
 // Create the inner HTML for each card
 cardDiv.innerHTML = `
 <img src="${card.photo}" class="card-img-top" alt="...">
 <div class="card-body">
   <p class="card-text">${card.blog}</p>
 </div>
`;

// Append the card to the container
cardContainer.appendChild(cardDiv);
});  