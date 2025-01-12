//////////////////cursor/////////////////////
var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var blor = document.querySelector("#cursor-blur")
main.addEventListener("mousemove",function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration:1,
        ease:"back.out"
    })
})
////
main.addEventListener("mousemove",function(dets) {
    gsap.to(blor, {
        x: dets.x -150,
        y: dets.y -150,
        duration:1,
        ease:"back.out"
    })
})
////////////////////////////////////////////
gsap.to("#nav",{
    
  backgroundColor:"rgb(1, 1, 97)",
  duration:0.5,
  zIndex:100,
  height:"130px",
  scrollTrigger:{
trigger:"#nav",
scroller:"body",
start:"top -15%",
end:"top -11%",
scrub:1,
  }
})
//////////////////////////////////////////////

const texts = [
  "DATA",
  "INTELLIGENNCE.",
  "EXPERIANCED.",
  "CREATIVE!"
];

const typingText = document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Typing speed
  } else {
    setTimeout(eraseText, 1500); // Pause before erasing
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); // Erasing speed
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 500); // Pause before typing the next word
  }
}

// Start the typing animation
typeText();




///////////////////////////////////////////////


$(document).ready(function () {
  // Initially show content for Button 1
  $("#content1").show();

  // Show content when a button is clicked
  $(".grid-button").click(function () {
    const target = $(this).data("target");

    // Hide all content and show the targeted one
    $(".content").hide();
    $("#" + target).fadeIn();
  });
});
/////////////////////////////swiper////////////////////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 600,
    disableOnInteraction: true,
  }
});
/////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper2 ", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  }
});
/////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper3 ", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  }
});


/////////////////////////////////////


gsap.utils.toArray('p').forEach(p => {
  gsap.fromTo(p, {
    opacity: 0,
    x: 150,
    skewX: 30
  }, {
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: p

  })
})



gsap.utils.toArray('h1.sec4-h1,h1.sec6-h1,.sec7-part1 h1,h1.main-heading-h1,h1.main-heading-h1,h1.sec-10-div-1-h2,h1.sec-11-h1-top')
.forEach(title => {
  gsap.fromTo(title, {
    letterSpacing: '10px',
    opacity: 0,
    x: 300,
    skewX: 65
  }, {
    letterSpacing: '0',
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: title
  })
})
gsap.utils.toArray('img.sec6-part2-img')
.forEach(title => {
  gsap.fromTo(title, {
    letterSpacing: '10px',
    opacity: 0,
    x: 300,
    skewX: 65
  }, {
    letterSpacing: '0',
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: title
  })
})

//////////////////////////////////////////////////////////////


const tl = gsap.timeline()
tl.to(".loader",{
opacity:0,
zIndex:2500
})
tl.from(".loader",{
    x:50,
    stagger:0.2,
    duration:0.5,
    opacity:0,
    stagger:1,
})
tl.to(".loader",{
    opacity:0,
    x:-50,
    duration:0.5,
stagger:0.15,

})
tl.to(".loader",{
    opacity:0,
    zIndex:0
})



/////////////////////////////////////////////////////////////
function marqueAnimation(){
  window.addEventListener("wheel", function (dets) {
      if (dets.deltaY > 0) {
  
      gsap.to(".marque", {
          transform:"translateX(-200%)",
          repeat:-1,
          duration:9,
          ease:"none"
         
      })
      gsap.to(".marque img ", {
          rotate:180
      })
  
      }  else{
          gsap.to(".marque", {
              transform:"translateX(0%)",
              repeat:-1,
              duration:9,
              ease:"none"
              
          })
          gsap.to(".marque img", {
              rotate:0
          })
      }
  })
  }
  marqueAnimation()

//////////////////////////////////////////////////////

// Get elements
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('sidebar-toggle');
const closeButton = document.getElementById('close-btn');

// Function to open sidebar
toggleButton.addEventListener('click', () => {
    sidebar.style.width = '390px'; // Open sidebar
});

// Function to close sidebar
closeButton.addEventListener('click', () => {
    sidebar.style.width = '0'; // Close sidebar
});
////////////////////////////////////////////////////////
gsap.utils.toArray('.line').forEach(line=>{
  gsap.fromTo(line,{
      opacity:0,
      width:'0%'
  },{
      opacity:1,
      width:'100%',
      duration:2,
      delay:4,
      scrollTrigger:line

  })
})
///////////
toggleButton.addEventListener('click', () => {
  sidebar.style.width = '100%'; // Full screen width for mobile
});