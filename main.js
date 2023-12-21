// main-menu
function menuOpen(){
    document.querySelector('.mobile-menu').classList.add('show');
    document.querySelector('.menu-open').style.display='none';
    document.querySelector('.menu-close').style.display='block';
}

function menuClose(){
    document.querySelector('.mobile-menu').classList.remove('show');
    document.querySelector('.menu-open').style.display='block';
    document.querySelector('.menu-close').style.display='none';
}


// Hot Deal Section
let btn = document.querySelector(".click-btn");
let showHide = document.querySelector(".show-and-hide");

btn.addEventListener("click", ()=>{
    showHide.classList.toggle("show-more");

    if(btn.innerHTML === "আরো দেখুন"){
        btn.innerHTML = "বন্ধ করুন";
    }
    else{
        btn.innerHTML = "আরো দেখুন";
    }
})


// Gudgets Section
let btnOne = document.querySelector(".click-btn-1");
let showHideOne = document.querySelector(".show-and-hide-1");

btnOne.addEventListener("click",()=>{
    showHideOne.classList.toggle("show-more-1");

    if(btnOne.innerHTML === "আরো দেখুন"){
        btnOne.innerHTML = "বন্ধ করুন";
    }
    else{
        btnOne.innerHTML = "আরো দেখুন";
    }
})

// Back to Top 
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


