const checkIsVisible = (element) => {
  data = element.split(","); 

for (let i = 0; i < data.length; i++) {

  result = data[i].split("|"); 

  footer = document.getElementById(result[1])
  if (!footer.classList.contains(result[0])) {
      const rect = footer.getBoundingClientRect();
  
      if(rect.top <= document.documentElement.clientHeight){
          footer.classList += '' +result[0]
      }
}

} 
  
};

document.addEventListener('scroll', () => {
  // checkIsVisible();
  checkIsVisible('features__animation|features,quality__animation|quality,steps__animation|steps,values__animation|values,pricing__animation|pricing,testimonials__animation|testimonials,faq__animation|faq,dev__animation|dev,footer__animation|footer');
})

var acc = document.getElementsByClassName("faq__lower--dt");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonials__review ");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  

}

function openMenu(){
  document.body.classList.remove("menu--close")
  document.body.classList += " menu--open"
}
function closeMenu(){
  document.body.classList.remove("menu--open")
   document.body.classList += " menu--close"
}