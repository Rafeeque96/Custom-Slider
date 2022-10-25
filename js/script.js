let slider = document.querySelector("#slider")
let slides = document.querySelectorAll(".slide")

let prevButton = document.querySelector(".prevButton")
let nextButton = document.querySelector(".nextButton")
let slideCount = slides.length;
let activeSlideIndex = 0;
let navigation = document.querySelector(".navigation")

//show the first slide on site load
slides[activeSlideIndex].classList.add("active")

//create navigation bullets
for(let i = 0;i < slideCount;i++){
    let bullet = `<input class ="bullet" type="radio" name ="nav" data-id=${i} >`
    navigation.innerHTML += bullet
}

let bullets = document.querySelectorAll(".bullet")

bullets[activeSlideIndex].checked = true

//reset slides active bullets
function resetSlides(){
    slides[activeSlideIndex].classList.remove("active")
    // slides.forEach(slide => slide.classList.remove ("active"))
}

//navigating to next slide
nextButton.addEventListener("click", function(){
    resetSlides()
    activeSlideIndex++
    if(activeSlideIndex > slideCount-1 ) {
        activeSlideIndex = 0}
    // console.log(activeSlideIndex)
    bullets[activeSlideIndex].checked = true
    slides[activeSlideIndex].classList.add("active")
})

//navigating to prev slide
prevButton.addEventListener("click",function(){
   resetSlides()
   activeSlideIndex--
   if(activeSlideIndex < 0 ){
       activeSlideIndex = slideCount - 1 }
    bullets[activeSlideIndex].checked = true
   slides[activeSlideIndex].classList.add("active") 
})

// navigating with bullet navs

bullets.forEach(item => {
    // console.log(item)
    item.addEventListener("change", function(e){
        resetSlides()
        activeSlideIndex = e.target.dataset.id
        // dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements
        //  console.log(activeSlideIndex)
        slides[activeSlideIndex].classList.add("active")
    })
})
