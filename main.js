
const cardData = [
  { photo: "./assets/appetizer.webp", blog: "This is blog content 1" },
  { photo: "./assets/BBQ-Pizza.png", blog: "This is blog content 2" },
  { photo: "./assets/breakfast.jpg", blog: "This is blog content 3" },
  { photo: "./assets/Cesar Salad.jpeg", blog: "This is blog content 4" },
  { photo: "./assets/Cherry-Berry Smoothie Bowl.jpg", blog: "This is blog content 5" },
  { photo: "./assets/Chocolate Chip Cookie.jpg", blog: "This is blog content 6" },
];

// JavaScript code to create cards...

  
  // Get the container where the cards will be inserted
  const cardContainer = document.getElementById("card-container");
  
  // Loop through the card data array and create cards
  cardData.forEach((card) => {
    // Create a new div element for each card
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "m-2");
    cardDiv.style.width = "18rem"; // Set card width
    
    // Create the inner HTML for each card
    cardDiv.innerHTML = `
      <img src="${card.photo}" class="card-img-top"  style="height: 200px; width: 286px; object-fit: cover;" alt="...">
      <div class="card-body">
        <p class="card-text">${card.blog}</p>
      </div>
    `;
  
    // Append the card to the container
    cardContainer.appendChild(cardDiv);
  });
  