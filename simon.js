// define the colours 
// create an array colours with value; red blue green and yellow

let colours = ["red", "blue", "green", "yellow"];

// 2. Create an empty array sequence to store the game sequence.

let sequence = [];

// 3. Create an empty array playerSequence to store player’s sequence.

let playerSequence = [];

// 4. Create a variable level with initial value 0.

let level = 0;

// 5. Create a variable gameActive with initial value false.

let gameActive = false;

// 6. In flash(color) → get the button by id.

function flash(color) {
    const btn = document.getElementById(color);
    if(!btn)return;
    btn.classList.add("flash");
    setTimeout(()=> btn.classList.remove("flash")
    ,400)
}

// 7. Add the CSS class "flash" to that button.


// 8. Remove the "flash" class after 400ms using setTimeout.


// 9. In playSequence() → create counter i = 0.


// 10. Start an interval that repeats every 800ms.


// 11. Call flash(sequence[i]).


// 12. Increment i each time.


// 13. Stop the interval when i reaches sequence length.

function playSequence() {
    let i = 0;
    
const interval = setInterval(()=>{
        flash(sequence[i]);
        i++;
        if(i >= sequence.length){
            clearInterval(interval);
        }
    },800)
}


// 14. In nextRound() → reset playerSequence to empty.


// 15. Increase level by 1.


// 16. Update the status element text to show the level.


// 17. Pick a random color from colors.


// 18. Push that color into sequence.


// 19. Call playSequence() to display the sequence.

function nextRound() {
    playerSequence = [];
    level++;
    document.getElementById("status").textContent = `Level ${level}`;
    const randomColour = colours[Math.floor(Math.random()*colours.length)];
    sequence.push(randomColour);
    playSequence();
}

// 20. In handleClick(color) → if gameActive is false, stop.


// 21. Push the clicked color into playerSequence.


// 22. Call flash(color) to show animation.


// 23. Compare each element of playerSequence with sequence. If mismatch → show "Wrong! Game Over" and set gameActive = false.


// 24. If player finished the whole sequence correctly → wait 1000ms, then call nextRound().

function handleClick(color){
    if(!gameActive){
        return;
    }
    playerSequence.push(color);
    
    flash(color);

    for(let i = 0; i < playerSequence.length; i++){
        if(playerSequence[i] !== sequence[i]){
            document.getElementById("status").textContent = "Wrong! Game Over";
            gameActive = false;
            return;
        }
    }
        if(playerSequence.length === sequence.length){
            setTimeout(nextRound,1000);
        }
}


// 25. In startGame() → reset sequence = [].


// 26. Reset level = 0.


// 27. Set gameActive = true.


// 28. Change status text to "Game Started!".


// 29. Call nextRound().

function startGame(){
    sequence = [];
    level = 0;
    gameActive = true;
    document.getElementById("status").textContent = "Game Started!";
    nextRound();
}

// 30. In resetGame() → reset sequence = [].


// 31. Reset playerSequence = [].


// 32. Reset level = 0.


// 33. Set gameActive = false.


// 34. Change status text to "Press Start to Play".


// 35. Add event listeners for each color in colors.


// 36. On click of a color → call handleClick(color).

function resetGame(){
    sequence = [];
    playerSequence = [];
    level = 0;
    gameActive = false;
    document.getElementById("status").textContent = "Press Start To Play";
}

colours.forEach(color=>{
        document.getElementById(color).addEventListener("click",()=>handleClick(color));
    })