gsap.from(".letter", {
  y: -100,
  opacity: 0,
  duration: 0.6,
  ease: "power4.out",
  stagger: 0.12  
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".div1 p").forEach((p) => {
  gsap.from(p, {
    scrollTrigger: {
      trigger: p,
      start: "top 85%",   
      toggleActions: "play none none none", 
    },
    opacity: 0,
    y: 40,           
    duration: 2,
    ease: "power2.out",
  });
});

gsap.from(".aboutme", {
  scrollTrigger: {
    trigger: ".aboutme",
    start: "top 55%",
  },
  x: -30,       
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".heading2", {
  scrollTrigger: {
    trigger: ".heading2",
    start: "top 55%",
  },
  x: -100,  
  opacity: 0,     
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".heading3", {
  scrollTrigger: {
    trigger: ".heading3",
    start: "top 55%",
  },
  x: -100,  
  opacity: 0,     
  duration: 0.9,
  ease: "power3.out",
});

gsap.registerPlugin();

gsap.from([".box1", ".box2", ".box3", ".box4", ".box5",".box6",".box7",".box8"], {
  scrollTrigger: {
     trigger: ".fulldiv",
       start: "top 80%",
    },
   duration: 0.8,
   x: -150,
  opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from([".contact-form", ".right"], {
   scrollTrigger: {
        trigger: ".main-container",
       start: "top 80%",
   },
     duration: 0.8,
     x: -150,
    opacity: 0,
     stagger: 0.2,
     ease: "power2.out"
}); 

let clickCount=0;
function showAlertSequence(){
  clickCount++;
  if(clickCount===1){
    alert("You are a Drone Driver!");
  }
  else if(clickCount===2){
    alert("You are a Space Pilot!");
  }
  else if(clickCount===3){
    alert("You are a Robot Human Communicator!");
  }
  else{
    alert("You are a Animal Conservational Technologist!");
    clickCount=0;
  }
}

const submitform=document.getElementById('submitform');


submitform.addEventListener('submit',function(event){
  //stop the pg from reloading
  event.preventDefault();
  //Extracting data
  const formData= new FormData(submitform);
  let allFilled=true;
//checking if all are filled
for(let value of formData.values()){
  if (value.trim()===""){
    allFilled=false;
    break;
  }
}
 //if everything filled,final message
 if (allFilled){
  alert("Form submitted successfully!");
  submitform.reset();
  //hide the message
  setTimeout( 5000);
 }else {
  alert("Please fill out all fields before submitting!");
 }
  });


function showAlertSequence() {
    alert("You are a Space Pilot!");
}
 