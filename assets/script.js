// Implement a score list at the end of the Quiz 
var ScoreList = document.getElementById("ScoresList"); 
var score = JSON.parse(localStorage.getItem("score")) || []; 
ScoreList.innerHTML = score.map(score => { 
    return `<li class="score">${score.name} - ${score.score}</li>`; 
}).join('')

var resetScore = document.querySelector(".reset-button"); 
// Add function to reset Scores list 
function resetScore() {
    localStorage.clear(); 
    window.location.reload("./index.html");
}; 
// Listener for Reset Button 
resetScore.addEventListener("click", resetHighScores);

// Variable of letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ!@#$%^&*' 
letters = letters.split(''); 

var fontSize=10, 
    columns = canvas.width / fontSize; 