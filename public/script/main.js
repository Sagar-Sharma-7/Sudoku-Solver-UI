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
    boxes[i].style.borderColor = "#ACFBAF";
    boxes[i].style.borderWidth = "2px"
       num[1].onclick = () => {
            boxes[i].innerHTML = 1;
            console.log(i)
            i += 1;
            if(i < 81){
                f = true;
                filling();
            }else{
                f = false;
            }
    };
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