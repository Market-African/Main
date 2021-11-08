
// header menu toggle 

// const btnBurger =document.querySelector(".btn-burger")
// const nav =document.querySelector("header .nav")
// const headerIcon =document.querySelector("header .icon")
// const headerbtn =document.querySelector("header .btn")
// const menuLogo =document.querySelector("header .menu-logo")

// // console.log(menuBurger)

// let menuOpen =false;

// btnBurger.addEventListener("click", () => {

//   if (!menuOpen) {
//     btnBurger.classList.add("open")
//     // btnBurger.classList.add("dark")
//     nav.classList.add("open-menu")
//     headerIcon.classList.add("open-menu")
//     headerbtn.classList.add("open-menu")
//     menuLogo.classList.add("open-menu")
//     menuOpen=true;

//   } else {
//     btnBurger.classList.remove("open")
//     btnBurger.classList.remove("dark")
//     nav.classList.remove("open-menu")
//     headerIcon.classList.remove("open-menu")
//     headerbtn.classList.remove("open-menu")
//     menuLogo.classList.remove("open-menu")
//     menuOpen = false;
//   }
// })



// slide show or carsoule 

function maker(img,btn,heading,link){

  // create element 

  const slide =document.createElement("div");
  const textBox =document.createElement("div");
  const image =document.createElement("img");
  const title =document.createElement("h1");
  const button =document.createElement("a");
  
 //Connect eleoment

  slide.appendChild(image)
  slide.appendChild(textBox)
  textBox.appendChild(title)
  textBox.appendChild(button)

 // add css

  slide.classList.add("slide")
  textBox.classList.add('slide__text-box')
  title.classList.add("slide__title")
  image.classList.add("slide__img")
  button.classList.add("btn")
  button.classList.add("btn--white")
  button.classList.add("btn--animated")
  
//  added contect  

  image.src =img

  button.textContent = btn
  button.href = link
  title.textContent = heading

  //return a paranet
  return slide

}


const data = [
    {
        title:'sauti east africa',
        img:'../../images/slide1.jpg',
        btn: 'welcome',
        link : '#'
    },
    {
      title:' empowers women ',
      img:'../../images/slide2.jpg',
      btn: 'what we do',
      link : `../../structure/mainPage/about.html`
    },
    {
      title:'gap in trade',
      img:'../../images/slide3.jpg',
      btn: 'blog and news',
      link : '../../structure/mainPage/blog.html'
    }
]

// paranet selection 
const slideContainer =document.querySelector(".slide-container");

// looping for data
for (let i= 0; i < data.length; i++) {
const element = data[i];
slideContainer.appendChild(maker(element.img,element.btn,element.title,element.link))
}

console.log(maker());

//animated slid 

let index =0;

show();

function show(){
let i;
let slide = document.querySelectorAll(".slide")

for (i = 0; i < slide.length; i++) {
    const element = slide[i];
    element.style.display ="none"
}

index++

if (index > slide.length) {index =1}

slide[index -1].style.display= "block"

setTimeout(show, 3000);
}