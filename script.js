//1. Get the elements
const flipBtn = document.getElementById("flipBtn");
const result = document.getElementById("result");
const coinImage = document.getElementById("coinImage");

//2. Wait for button click
flipBtn.addEventListener("click", function(){

    // Start animation + feedback or start spin and show user feedback
    coinImage.classList.add("flip"); //adds the .flip we created in CSS so the image will flip
    result.textContent = "Flipping..."; // Shows "Flipping..." in the text area
    
    // Assign randomNum + assign "outcome"
    const randomNum = Math.random();
    let outcome; // empty variable that will store the final result

    // Saves the result to outcome, decides heads or tails
    if (randomNum < 0.5) {
        outcome = "heads";
    } else {
        outcome = "tails";
    }

    // Switch image halfway through
    setTimeout(function () {
        if (outcome === "heads") {
            coinImage.src = "Images/cat3.png";
        } else {
            coinImage.src = "Images/skull3.png";
        }
    }, 400); // waits 400ms then changes the coing img

    // Finish Flip + update text
    setTimeout(function () {
        if (outcome === "heads") {
            result.textContent = "Kitty";
        } else {
            result.textContent = "Game Over";
        }
        
        // Reset coin flip
        coinImage.classList.remove("flip");
    }, 800);
});

/*
	1.	Find the button, result text, and coin image
	2.	Wait for the user to click
	3.	Start the flip animation
	4.	Show “Flipping…”
	5.	Generate a random result
	6.	Save that result as heads or tails
	7.	Halfway through, switch the image
	8.	At the end, show the final text
	9.	Reset the animation
*/