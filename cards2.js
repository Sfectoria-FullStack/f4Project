
const cardDataa = [
    { photo: "./assets/Grilled Red Snapper.jpg", blog: "This is blog content 1" },
    { photo: "./assets/Partymaker_paper_straws_coconut.png", blog: "This is blog content 2" },
    { photo: "./assets/Spinach and cheese pasta.jpg", blog: "This is blog content 3" },
    { photo: "./assets/Toast side.jpg", blog: "This is blog content 4" },
    { photo: "./assets/Cherry-Berry Smoothie Bowl.jpg", blog: "This is blog content 5" },
    { photo: "./assets/Toast with tomato, onion & hummus.jpg", blog: "This is blog content 6" },
  ];
  
  // JavaScript code to create cards...
  
    
    // Get the container where the cards will be inserted
    const cardContainerr = document.getElementById("card-container2");
    
    // Loop through the card data array and create cards
    cardDataa.forEach((card) => {
      // Create a new div element for each card
      const cardDivv = document.createElement("div");
      cardDivv.classList.add("card", "m-2");
      cardDivv.style.width = "18rem"; // Set card width
      
      // Create the inner HTML for each card
      cardDivv.innerHTML = `
        <img src="${card.photo}" class="card-img-top"  style="height: 200px; width: 286px; object-fit: cover;" alt="...">
        <div class="card-body">
          <p class="card-text">${card.blog}</p>
        </div>
      `;
    
      // Append the card to the container
      cardContainerr.appendChild(cardDivv);
    });