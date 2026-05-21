document.querySelector('#result').innerText='HAI';

let computer_choice;
let computer='';
let computer_points=0;
let user_points=0;

function check_rock(){
    computer_choice=Math.random()*3;
    if(computer_choice>=0 && computer_choice<1){
        computer='ROCK';
        document.querySelector('#result').innerText='Computer Choice : ROCK , RESULT : DRAW';
    }
    else if(computer_choice<2){
        computer='PAPER';
        computer_points++;
        document.querySelector('#result').innerText='Computer Choice : PAPER , RESULT : COMPUTER WIN';
    }
    else{
        computer='SCISSORS';
        document.querySelector('#result').innerText='Computer Choice : SCISSORS , RESULT : USER WIN';
        user_points++;
    }
    document.querySelector('#points').innerText=`Your Score : ${user_points}  ,  Computer Score : ${computer_points}`;
}

function check_paper(){
    computer_choice=Math.random()*3;
    if(computer_choice>=0 && computer_choice<1){
        computer='ROCK';
        document.querySelector('#result').innerText='Computer Choice : ROCK , RESULT : USER WIN';
        user_points++;
    }
    else if(computer_choice<2){
        computer='PAPER';
        document.querySelector('#result').innerText='Computer Choice : PAPER , RESULT : DRAW';
    }
    else{
        computer='SCISSORS';
        document.querySelector('#result').innerText='Computer Choice : SCISSORS , RESULT : COMPUTER WIN';
        computer_points++;
    }
    document.querySelector('#points').innerText=`Your Score : ${user_points}  ,  Computer Score : ${computer_points}`;
}

function check_scissors(){
    computer_choice=Math.random()*3;
    if(computer_choice>=0 && computer_choice<1){
        computer='ROCK';
        document.querySelector('#result').innerText='Computer Choice : ROCK , RESULT : COMPUTER WIN';
        computer_points++;
    }
    else if(computer_choice<2){
        computer='PAPER';
        document.querySelector('#result').innerText='Computer Choice : PAPER , RESULT : USER WIN';
        user_points++;
    }
    else{
        computer='SCISSORS';
        document.querySelector('#result').innerText='Computer Choice : SCISSORS , RESULT : DRAW';
    }
    document.querySelector('#points').innerText=`Your Score : ${user_points}  ,  Computer Score : ${computer_points}`;
}