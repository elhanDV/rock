// const
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const round = document.querySelector(".round");
const playerPoint = document.querySelector(".player-point");
const computerPoint = document.querySelector(".computer-point");
const display = document.querySelector(".display-text");
const resetBtn = document.querySelector(".btn");
const computerMove = document.querySelector(".c-choice");

// variables
var countRound = 0;
var countPlayerPoint = 0;
var countComputerPoint = 0;
var playerChoice;
var computerChoice;
var temp;

// when content is loaded in browser we want default value to zero
document.addEventListener("DOMContentLoaded",()=>{
    round.innerHTML = `${countRound}`;
    playerPoint.innerHTML = `${countPlayerPoint}`;
    computerPoint.innerHTML = `${countComputerPoint}`;
    display.innerHTML = `Ready`;
})

// player choosing move
rock.addEventListener("click",()=>{
    temp = 1;
    countRound++;
    generatePlayerChoice(temp);
    generateComputerChoice();
    checkWin(playerChoice,computerChoice);
    refreshScreen();
    
})
paper.addEventListener("click",()=>{
    temp = 2;
    countRound++;
    generatePlayerChoice(temp);
    generateComputerChoice();
    checkWin(playerChoice,computerChoice);
    refreshScreen();
    
})
scissor.addEventListener("click",()=>{
    temp = 3;
    countRound++;
    generatePlayerChoice(temp);
    generateComputerChoice();
    checkWin(playerChoice,computerChoice);
    refreshScreen();
    
})

// generating player choice
function generatePlayerChoice(temp){
    if(temp == 1){
        playerChoice = 1;
    }else if(temp == 2){
        playerChoice = 2;
    }else{
        playerChoice = 3;
    }
}

// generate computer choice 
function generateComputerChoice(){
    computerChoice = Math.floor(Math.random()*3 + 1);
    // displaying computer move
    if(computerChoice == 1){
        computerMove.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ffd0a1" d="M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z"/></svg>`;
    }else if(computerChoice == 2){
        computerMove.innerHTML = `<svg fill="#ffd0a1" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>hand</title>
        <path d="M31 8.5c0 0-2.53 5.333-3.215 8.062-0.896 3.57 0.13 6.268-1.172 9.73-2.25 4.060-2.402 4.717-10.613 4.708-3.009-0.003-11.626-2.297-11.626-2.297-1.188-0.305-3.373-0.125-3.373-1.453s1.554-2.296 2.936-2.3l5.439 0.478c1.322-0.083 2.705-0.856 2.747-2.585-0.022-2.558-0.275-4.522-1.573-6.6l-5.042-7.867c-0.301-0.626-0.373-1.694 0.499-2.171s1.862 0.232 2.2 0.849l5.631 7.66c0.602 0.559 1.671 0.667 1.58-0.524l-2.487-11.401c-0.155-0.81 0.256-1.791 1.194-1.791 1.231 0 1.987 0.47 1.963 1.213l2.734 11.249c0.214 0.547 0.972 0.475 1.176-0.031l0.779-10.939c0.040-0.349 0.495-0.957 1.369-0.831s1.377 1.063 1.285 1.424l-0.253 10.809c0.177 0.958 0.93 1.098 1.517 0.563l3.827-6.843c0.232-0.574 1.143-0.693 1.67-0.466 0.491 0.32 0.81 0.748 0.81 1.351v0z"></path>
        </svg>`;
    }else{
        computerMove.innerHTML = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 504.32 504.32" xml:space="preserve">
   <path style="fill:#ffd0a1;" d="M158.851,269.653l-8.533-230.4c0-18.773,11.947-34.133,30.72-34.133s27.307,14.507,29.013,34.133
       l17.067,170.667l17.067-170.667c5.12-19.627,11.947-34.133,30.72-34.133c18.773,0,29.013,15.36,29.013,34.133l-8.533,170.667v17.067
       c0-18.773,15.36-34.133,34.133-34.133c18.773,0,34.133,15.36,34.133,34.133v25.6c0-13.653,11.947-25.6,25.6-25.6
       s25.6,12.8,25.6,25.6V363.52c0,68.267-25.6,76.8-34.133,136.533h-204.8c-9.387-48.64-37.547-104.96-65.707-153.6
       c-3.413-5.973-6.827-11.947-11.093-17.92c-18.773-30.72-7.68-75.947,28.16-75.947c0,0,18.773,4.267,29.867,17.067H158.851z"/>
   <path style="fill:#ffd0a1;" d="M380.718,504.32h-204.8c-1.707,0-3.413-1.707-4.267-3.413c-8.533-40.96-29.867-92.16-64.853-151.893
       c-3.413-5.973-6.827-11.947-11.093-17.92c-11.947-19.627-12.8-44.373-2.56-62.293c7.68-12.8,19.627-20.48,34.133-20.48
       c2.56,0,4.267,1.707,4.267,4.267s-1.707,4.267-4.267,4.267c-15.36,0-23.04,8.533-27.307,16.213c-8.533,15.36-7.68,36.693,2.56,53.76
       c3.413,5.973,7.68,11.947,11.093,17.92c34.133,58.88,56.32,110.08,64.853,151.04h197.973c4.267-23.893,10.24-40.107,17.067-55.467
       c8.533-20.48,16.213-39.253,16.213-76.8V252.587c0-11.093-10.24-21.333-21.333-21.333c-11.093,0-21.333,10.24-21.333,21.333
       c0,2.56-1.707,4.267-4.267,4.267s-4.267-1.707-4.267-4.267v-25.6c0-16.213-13.653-29.867-29.867-29.867
       s-29.867,13.653-29.867,29.867c0,2.56-1.707,4.267-4.267,4.267s-4.267-1.707-4.267-4.267V209.92l8.533-170.667
       c0-9.387-2.56-17.92-7.68-23.04c-4.267-4.267-10.24-6.827-17.067-6.827c-13.653,0-21.333,8.533-26.453,30.72L230.531,209.92
       c0,2.56-1.707,4.267-4.267,4.267s-4.267-1.707-4.267-4.267L204.931,39.253c-2.56-20.48-10.24-29.867-24.747-29.867
       c-15.36,0-26.453,11.947-26.453,29.867l8.533,238.933c0,2.56-1.707,4.267-4.267,4.267c-2.56,0-4.267-1.707-4.267-4.267
       l-8.533-238.933c0-22.187,14.507-38.4,34.987-38.4c18.773,0,30.72,13.653,33.28,37.547l12.8,128l12.8-128
       c5.12-18.773,12.8-38.4,34.987-38.4c9.387,0,17.067,3.413,23.04,9.387c6.827,6.827,10.24,17.067,10.24,29.013l-8.533,162.987
       c6.827-8.533,17.92-13.653,29.867-13.653c21.333,0,38.4,17.067,38.4,38.4v5.12c5.12-5.973,12.8-9.387,21.333-9.387
       c15.36,0,29.867,14.507,29.867,29.867v110.933c0,39.253-8.533,59.733-17.067,80.213c-6.827,15.36-13.653,31.573-17.067,56.32
       C384.985,502.613,382.424,504.32,380.718,504.32z"/>
   </svg>`;
    }
}

// checking winning stats
// rock = 1 paper = 2 scissor = 3
function checkWin(playerChoice,computerChoice){
    if(playerChoice == 1 && computerChoice == 2){
        display.innerHTML = `Computer Win`;
        countComputerPoint++;
    }else if(playerChoice == 2 && computerChoice == 1){
        display.innerHTML = `Player Win`;
        countPlayerPoint++;
    }else if(playerChoice == 3 && computerChoice == 1){
        display.innerHTML = `Computer Win`;
        countComputerPoint++;
    }else if(playerChoice == 1 && computerChoice == 3){
        display.innerHTML = `Player Win`;
        countPlayerPoint++;
    }else if(playerChoice == 2 && computerChoice == 3){
        display.innerHTML = `Computer Win`;
        countComputerPoint++;
    }else if(playerChoice == 3 && computerChoice == 2){
        display.innerHTML = `Player Win`;
        countPlayerPoint++;
    }else{
        display.innerHTML = `Draw`;
    }
}

// refresh screen and update values
function refreshScreen(){
    round.innerHTML = `${countRound}`;
    playerPoint.innerHTML = `${countPlayerPoint}`;
    computerPoint.innerHTML = `${countComputerPoint}`;
}

// reset button functionality
resetBtn.addEventListener("click",()=>{
    countRound = 0;
    countPlayerPoint = 0;
    countComputerPoint = 0;
    round.innerHTML = `${countRound}`;
    playerPoint.innerHTML = `${countPlayerPoint}`;
    computerPoint.innerHTML = `${countComputerPoint}`;
    display.innerHTML = `Ready`;
    computerMove.innerHTML = ``;
})