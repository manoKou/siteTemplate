// images 'class'
var images = new function(){
  this.curr = 0;
  /*this.list=[
    "images/pharos.jpg",
    "images/limani.jpg",
    "images/faros.jpg",
    "images/paliaPol.jpg",
    "images/steno.jpg",
    "images/trimart.jpg",
    "images/gata.jpg"
  ];
  */

  this.list=[
    "pharos.jpg",
    "limani.jpg",
    "faros.jpg",
    "paliaPol.jpg"
  ];

  this.direct = "right";
}

window.onload = function() {
  console.log("loaded");

  /* menu stuff

  // this is the function for the burger btn animation
  var btn = document.getElementById("burger-btn");
  var menu = document.getElementsByClassName('menu-wrapper')[0];

  function changeBtn(event) {
    //this.classList.toggle("change move-left");
    this.classList.toggle("move-left");
    //console.log(event);
  }

  function toggleMenu() {
    menu.classList.toggle("resp-view");
  }

  btn.addEventListener("click", changeBtn);
  btn.addEventListener("click", toggleMenu);


  // end menu stuff */

  var leftImg = document.getElementById("second-header-cont");
  var rightImg = document.getElementById("header-cont");
  var firstTxtCont = document.getElementById("first-curved-text");
  var secondTxtCont = document.getElementById("second-curved-text");
  var firstTxt = document.getElementById("first-div-text");
  var secondTxt = document.getElementById("second-div-text");
  var thirdTxt = document.getElementById("third-div-text");
  var fourthTxt = document.getElementById("fourth-div-text");
  var textInt = 0;

  firstTxtCont.innerHTML = firstTxt.innerHTML;

  function swipeText(){
    // changing text function
    if(textInt==3){
      textInt=0;
    }else {
      textInt++;
    }

    if (textInt==0) {
      firstTxtCont.innerHTML = firstTxt.innerHTML;
    }else if (textInt==1) {
      secondTxtCont.innerHTML = secondTxt.innerHTML;
    }else if (textInt==2){
      firstTxtCont.innerHTML = thirdTxt.innerHTML;
    }else if (textInt==3) {
      secondTxtCont.innerHTML = fourthTxt.innerHTML;
    }
  }

  function swipe(){

    // preload hack
    if (images.curr==images.list.length){
      rightImg.style = "right:0%;"+"background-image: url('" + String(images.list[0]) + "');";
      leftImg.style = "right:0%;"+"background-image: url('" + String(images.list[0]) + "');";
    }else {
      rightImg.style = "right:0%;"+"background-image: url('" + String(images.list[images.curr]) + "');";
      leftImg.style = "right:0%;"+"background-image: url('" + String(images.list[images.curr]) + "');";
    }



    // code to init the swipe effect
    if (images.direct==="right") {

      rightImg.style = "right:-100%;"+"background-image: url('" + String(images.list[images.curr]) + "');";
      if(images.curr==images.list.length-1){
        leftImg.style = "left: 0%;"+"background-image: url('" + String(images.list[0]) + "');";
      }else{
        leftImg.style = "left: 0%;"+"background-image: url('" + String(images.list[images.curr+1]) + "');";
      }
      images.direct = "left";

    }else if (images.direct==="left") {

      leftImg.style = "left: -100%;"+"background-image: url('" + String(images.list[images.curr]) + "');";
      if (images.curr==images.list.length-1){
        rightImg.style = "right:0%;"+"background-image: url('" + String(images.list[0]) + "');";
      }else{
        rightImg.style = "right:0%;"+"background-image: url('" + String(images.list[images.curr+1]) + "');";
      }
      images.direct = "right";

    }

    images.curr += 1;
    if (images.curr==images.list.length){
      images.curr = 0;
    }
  }

  setInterval(swipeText, 4000);
  setInterval(swipe, 4000);

  // this is the function for the burger btn animation
  var btn = document.getElementById("burger-btn");
  //var menu = document.getElementsByClassName('menu-wrapper')[0];
  var mainMenu = document.getElementById('main-nav-id');

  /*btn.addEventListener("click", function(){
    this.classList.toggle("change");
  });*/
  function changeBtn(event) {
    this.classList.toggle("change");
    this.classList.toggle("move-left");
    //console.log(event);
  }

  function toggleMenu() {
    //menu.classList.toggle("resp-view");
    mainMenu.classList.toggle("resp-view");
  }

  btn.addEventListener("click", changeBtn);
  btn.addEventListener("click", toggleMenu);

}
