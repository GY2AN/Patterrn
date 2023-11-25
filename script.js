let rightPyramid = document.getElementById("rightHalfPyramid");
let righthalfpyramidEle = document.getElementById("rightHalfPyramid")
let mainHeadContainer = document.getElementById("mainHeadingContainer");
let cardContainerEle = document.getElementById("cardContainer");
let leftHalfPyramidEle = document.getElementById("leftHalfPyramid");
let fullPyramidEle = document.getElementById("fullPyramid");
let invertedHalfPYramidEle = document.getElementById("invertedHalfPyramid");
let invertedLeftPyramidEle = document.getElementById("invertedLeftPyramid");
let invertedFullPyramidEle = document.getElementById("invertedFullPyramid");

function home(){
    mainHeadContainer.classList.add("d-block");
    mainHeadContainer.classList.remove("d-none");
    cardContainerEle.classList.add("d-block");
    cardContainerEle.classList.remove("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");
    invertedHalfPYramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function pattern(){
    mainHeadContainer.classList.add("d-block");
    mainHeadContainer.classList.remove("d-none");
    cardContainerEle.classList.add("d-block");
    cardContainerEle.classList.remove("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");
    invertedHalfPYramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function rHalfPyramid(){
    righthalfpyramidEle.classList.remove("d-none");
    righthalfpyramidEle.classList.add("d-block");
    mainHeadContainer.classList.add("d-none");
    cardContainerEle.classList.add("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");
    invertedHalfPYramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function lHalfPyramid(){
    leftHalfPyramidEle.classList.remove("d-none");
    leftHalfPyramidEle.classList.add("d-block");
    mainHeadContainer.classList.add("d-none");
    cardContainerEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");   
    invertedHalfPYramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function fullPyramid(){
    fullPyramidEle.classList.add("d-block");
    fullPyramidEle.classList.remove("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    mainHeadContainer.classList.add("d-none");
    cardContainerEle.classList.add("d-none");
    invertedHalfPYramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function invertedHalfPYramid(){
    invertedHalfPYramidEle.classList.add("d-block");
    invertedHalfPYramidEle.classList.remove("d-none");
    mainHeadContainer.classList.add("d-none");
    cardContainerEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function invertedLeftHalfPyramid(){
    invertedLeftPyramidEle.classList.add("d-block");
    invertedHalfPYramidEle.classList.remove("d-none");
    mainHeadContainer.classList.add("d-none");
    cardContainerEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    invertedFullPyramidEle.classList.add("d-none");
}

function invertedFullPyramid(){
    invertedFullPyramidEle.classList.add("d-block");
    invertedFullPyramidEle.classList.remove("d-none");
    mainHeadContainer.classList.add("d-none");
    cardContainerEle.classList.add("d-none");
    fullPyramidEle.classList.add("d-none");
    leftHalfPyramidEle.classList.add("d-none");
    righthalfpyramidEle.classList.add("d-none");
    invertedLeftPyramidEle.classList.add("d-none");

}