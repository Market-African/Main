
// header menu toggle 

const btnBurger =document.querySelector(".btn-burger")
const nav =document.querySelector("header .nav")
const headerIcon =document.querySelector("header .icon")
const headerbtn =document.querySelector("header .btn")
const menuLogo =document.querySelector("header .menu-logo")

// console.log(menuBurger)

let menuOpen =false;

btnBurger.addEventListener("click", () => {

  if (!menuOpen) {
    btnBurger.classList.add("open")
    // btnBurger.classList.add("dark")
    nav.classList.add("open-menu")
    headerIcon.classList.add("open-menu")
    headerbtn.classList.add("open-menu")
    menuLogo.classList.add("open-menu")
    menuOpen=true;

  } else {
    btnBurger.classList.remove("open")
    btnBurger.classList.remove("dark")
    nav.classList.remove("open-menu")
    headerIcon.classList.remove("open-menu")
    headerbtn.classList.remove("open-menu")
    menuLogo.classList.remove("open-menu")
    menuOpen =false;
  }
})



// slide show or carsoule 


/* <div class="mySlides fade">
<div class="numbertext">3 / 3</div>
<img src="slide3.jpg" style="width:100%">
<div class="text">Caption Three</div>
</div> */


function maker(imag,heading){

  // create element 

  const slide =document.createElement("div");
  const image =document.createElement("img");
  const slideInfo =document.createElement("div");
  const slideContect =document.createElement("div");
  const title =document.createElement("h1");
  const name =document.createElement("h3");
  const para =document.createElement("h3");
  const button =document.createElement("a");
  
 //Connect eleoment

  slide.appendChild(image)
  slide.appendChild(slideContect)
  slideContect.appendChild(slideInfo)
  slideInfo.appendChild(name)
  slideInfo.appendChild(title)
  slideInfo.appendChild(para)
  slideInfo.appendChild(button)


 // add css

  slide.classList.add("slides")
  slide.classList.add("fade")
  title.classList.add("slide-title")
  image.classList.add("slide-img")
  slideContect.classList.add("slide-info-bg")
  slideInfo.classList.add("slide-info")
  slideInfo.classList.add("container")
  title.classList.add("info-title")
  para.classList.add("info-para")
  name.classList.add("info-name")
  button.classList.add("slide-btn")
  
//  added contect  

  image.src =imag
  button.textContent ="what we do"
  para.textContent ="sauti east africa empowers women led small and medium-sized eterprises to trade to legally, safely and profitably across east affrica's border "
  title.textContent ="closing the digital information gap for women in trade"

  name.textContent = "sauti east africa"
  button.href = "about.html"

  //return parent 

  return slide

}



//select parent 

const slideContainer =document.querySelector(".slide-container");


//images 

const images =[]

images[0]="images/slide1.jpg" 
images[1]="images/slide2.jpg"
images[2]="images/slide3.jpg"

// looping for images 

for (let i= 0; i < images.length; i++) {
  const element = images[i];
  slideContainer.appendChild(maker(element))
}

//animated slid 

let index =0;

show();

function show(){
  let i;
  let slide = document.querySelectorAll(".slides")

  for (i = 0; i < slide.length; i++) {
      const element = slide[i];
      element.style.display ="none"
  }

  index++
  
  if (index > slide.length) {index =1}

  slide[index -1].style.display= "block"

  setTimeout(show, 2000);
}