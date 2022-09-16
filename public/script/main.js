const boxes = document.querySelectorAll(".box");
const num = document.querySelectorAll(".num");
const solve_btn = document.querySelector("#solve_btn");


let i = 0;
let f = true;
const filling = () => {
    boxes.forEach(b => {
        b.style.borderColor = "rgb(125, 125, 125)";
        b.style.borderWidth = "1px";
    })
    if( i <= 80){
        boxes[i].style.borderColor = "#ACFBAF";
        boxes[i].style.borderWidth = "2px";
    }
    const fill = (x) => {
        if(i <= 80){
        boxes[i].innerHTML = x;
            // console.log(i)
            i += 1;
                filling();
        }else{
            f = false;
        }
    }
    num[0].onclick = () => {fill(0)};
    num[1].onclick = () => {fill(1)};
    num[2].onclick = () => {fill(2)};
    num[3].onclick = () => {fill(3)};
    num[4].onclick = () => {fill(4)};
    num[5].onclick = () => {fill(5)};
    num[6].onclick = () => {fill(6)};
    num[7].onclick = () => {fill(7)};
    num[8].onclick = () => {fill(8)};
    num[9].onclick = () => {fill(9)};
}

if(f == true){
    filling();
};

// function to write correct number at their respective place
const print_board = (board) => {
    let i;
    for(i = 0; i < 81; i++){
        boxes[i].innerHTML = board[i];
    };
};

// function to check if its possible to place a number in a given position or not
const possible = (board, row, col, n) => {
    let i;
    for(i = 0; i < 9; i++){
        if(board[row][i] == n){
            return false
        }
        if(board[col][i] == n){
            return false
        }
    }
    // check for 3 x 3 matrix
    let startrow = row - row % 3;
    let startcol = col - col % 3;
    let k;
    let l;

    for(k=0; k < 3; k++){
        for(l=0; l < 3; l++){
            if(board[k + startrow][l + startcol] == n){
                return false
            };
        }
    }
    return true;
    // why returning - after return function stops. As soon as I get one false - it will stop.
}

const solve = (board, row, col) => {
    if(row == 8 && col == 9){
        return true
    } // last loop

    if(col == 9){
        row += 1; // jump to next row
        col = 0;
    }

    // if col is not empty, then move on
    if(board[row][col] != 0){
        console.log("hello")
        return solve(board, row, col+1)
    }

    let x; // number to fill in sudoku
    for(x=1; x< 10;x++){
        if(possible(board, row, col, x) == true){
            board[row][col] = x;
            console.log("first if")
            if(solve(board, row, col+1)){
                console.log("second if")
                return true
            }
        }
        board[row][col] = 0
    }
    return false
}

solve_btn.addEventListener("click", () => {
    let num_list = [];
    let board = [];
    let i;
    for(i = 0; i < 81; i++){
        num_list.push(boxes[i].innerHTML);
    };
    let j = 0;
    while(j < 81){
        board.push(num_list.slice(j, j += 9)); // array in array
    }
    console.log(solve(board, 0, 0))
});