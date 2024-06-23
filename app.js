const div = document.querySelectorAll('.div');
const newgamebtn =document.querySelector('.newgamebtn');
const reset =document.querySelector('.resetbtn');
const winner = document.querySelector('.winner');

let winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turn=true;
let moves = 0;

div.forEach((divbox)=>{
    divbox.addEventListener('click',() =>{
        if(turn){
            divbox.innerHTML="X";
            turn =false;
        }else{
        divbox.innerHTML="O";
        turn = true;
        }
        divbox.classList.add('disabled');
        moves++;
        checkwinner();
    });
});

const checkwinner = ()=>{
for(pattern of winningpattern){
    let element0 = div[pattern[0]].innerHTML;
    let element1 = div[pattern[1]].innerHTML;
    let element2 = div[pattern[2]].innerHTML;

    if(element0 !="" && element1 !="" && element2 != "" && element0 === element1 && element1 === element2){
      winner.innerHTML = `Congratulations! Winner is ${element2}`;
      newgamebtn.style.display = 'block';
      reset.disabled =true; 
      disablediv();
      return;
     }
    }
    if (moves === 9 ) { 
        winner.innerHTML = "Match Draw!";
        newgamebtn.style.display = 'block';
        reset.disabled = true;
        console.log("lijfsc");
        disablediv();
    };
};


const disablediv = ()=>{
    for(divbox of div){
        divbox.classList.add('disabled');
    }
}

const enablediv = ()=>{
    for(divbox of div){
        divbox.classList.remove('disabled');
        divbox.innerHTML="";
    }
    turn =true;
    winner.innerHTML ="";
    
}
reset.addEventListener('click',()=>{
    moves =0;
   enablediv();
})

newgamebtn.addEventListener('click',()=>{
    moves = 0;
    enablediv();
    newgamebtn.style.display ="none";
})

