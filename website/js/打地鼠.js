// state = 0
// list_1 = ["./image/NEKO regular.jpg","./image/NEKO LOL.png","./image/NEKO cry.jpg"];
// function clicke(){
//     state = state >= 2 ? 0 : state+1;
//     var umr = document.getElementById("umr");
//     document.getElementById("umr").src = list_1[state]
// }

// let IsClick = false;
// let Where = 0;
// function check(i){
//     IsClick = true
//     $('index-${i}').style.backgroundImage="./image/NEKO LOL.png";
//     setTimeout(()=>{
//         reset(i);
//         IsClick = false;
//     },1000);
// }

// function reset(i){
//     let index = $('index-${i}');
//     index.style.backgroundImage = "./image/NEKO regular.jpg";
// }
// function clicke(i){
//     if (IsClick && Where == i){
//         reset(i);
//         document.getElementById("score").innerHTML++;
//     }
// }
// setInterval(() => {
//     Where = Math.floor(Math.random()*9)+1;
//     console.log(Where);
//     check(Where)
// }, 2000);

// let nowIndex = 0;
// let isClickable = false;

// function check(i) {
//     isClickable = true;
//     document.getElementById('box-${i}').style.backgroundImage= url("./image/NEKO regular.jpg");
//     setTimeout(() => {
//     reset(i);
//     isClickable = true;
//     }, 1000);
// }

// function reset(i) {
//     let box = document.getElementById('box-${i}');
//     box.style.backgroundImage = url("./image/NEKO LOL.png");
// }

// function clicke(i) {
//     if (isClickable && nowIndex == i) {
//     reset(i);
//     document.getElementById("score").innerHTML++; //
//     }
// }

// setInterval(() => {
//     nowIndex = Math.floor(Math.random() * 9) + 1;
//     console.log(nowIndex);
//     check(nowIndex);
// }, 2000);
