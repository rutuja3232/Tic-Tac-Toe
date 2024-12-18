let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");
let turn0 = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [3, 4, 6],
    [6, 7, 8]
];


const resetGame = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msg.innerText = "";

};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn0) {  //player 0
            box.innerHTML = "0"
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = "true";
        }
        box.disabled = true;
        checkWinner();
    });
});

/*const showWinner=(winner)=>{
  msg.innerHTML="Congratualationv, winner is ${winner}";
      msgcontainer.classList.remove("hide");
    
};*/


//check winner 

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val);
                //showWinner(pos1Val);

                msg.innerHTML = "Congratualationv, winner is " + pos1Val
                for (box of boxes) {
                    box.disabled = true;
                }
            }
        }
    }
};


resetBtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
