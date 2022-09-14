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
            console.log(i)
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
}

// solve_btn.addEventListener("click", () => {
//     boxes.forEach(box => {
//         if(box.innerHTML == ""){
//                 box.innerHTML = 0;
//         };
//     });

// });