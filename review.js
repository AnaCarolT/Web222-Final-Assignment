document.addEventListener("DOMContentLoaded", function(){
    //retrieving the data from data.js
        const reviewData = window.reviewData;

    //A function need to be created to be able to handle the cards (based on assignment 5)
    function loopCards() {
    //Choosing the place they are going to appear
    const reviewWall = document.getElementById("reviews");

     // Clear any existing review cards
     reviewWall.innerHTML = "";

    //Loop to manifest the cards
    reviewData.forEach(review => {
        const spaceCards = addCard(review);
        reviewWall.appendChild(spaceCards);
    });
}

    //A function for an individual card so It can have a format
    function addCard(review){
        const spaceCards = document.createElement("div");
        spaceCards.classList.add("card");

        const personName = document.createElement("h3");
        personName.textContent = review.name;

        const today = document.createElement("p");
        today.textContent = review.time;

        const rating = document.createElement("p");
        rating.textContent = "Rating: " + "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

        const text = document.createElement("p");
        text.textContent = review.text;

        //making it visible
        spaceCards.appendChild(personName);
        spaceCards.appendChild(today);
        spaceCards.appendChild(rating);
        spaceCards.appendChild(text);

        return spaceCards;
    }
    

    function submitCard(event){
        event.preventDefault();

        //retrieving all the data acquired
        const input = event.target;
        const name= input.querySelector("#name").value;
        const time = new Date().toLocaleDateString();
        const rating = parseInt(input.querySelector("input[name='rating']:checked").value);
        const text = input.querySelector("#text").value;

        //organizing the new data
        const newData = { name, time, rating, text};
        reviewData.push(newData);

        //create the card based on the data retrieved, append the new card
        const generateCard = addCard(newData);
        const spaceCards = document.getElementById("reviews");
        spaceCards.appendChild(generateCard);

         // Clear the form
        input.reset();
    }

    //
    const form = document.getElementById("review-input");
    form.addEventListener("submit", submitCard);

    loopCards();
});