const boxes = document.querySelectorAll(".box");
const num = document.querySelectorAll(".num");
const solve_btn = document.querySelector("#solve_btn");


boxes.forEach(box => {
    box.addEventListener("click", () => {
        num.forEach(item => {
            item.addEventListener("click", () =>{
                let n = item.innerHTML;
                box.innerHTML = n;
            });
        });
    });
});



solve_btn.addEventListener("click", () => {
    boxes.forEach(box => {
        if(box.innerHTML == ""){
                box.innerHTML = 0;
        };
    });

});