

let sun=document.querySelector('.sun');

let hero=document.querySelector('.hero');
let aboutdark=document.querySelector('.about');
let skills=document.querySelector('.skills')
let homeimg=document.querySelector('.homeimg');
let moon=document.querySelector(".moon");

let theme=document.querySelector('.theme');

let changing=document.querySelector('.changing');

let certificate=document.querySelector('.certificate');

let cerhead=document.querySelectorAll('.para');

let project1=document.querySelector('.pcardb1');
let project2=document.querySelector('.pcardb2');
let project3=document.querySelector('.pcardb3');

let abshov1=document.querySelector('.abshov1');
let abshov2=document.querySelector('.abshov2');
let abshov3=document.querySelector('.abshov3');
let abshov=document.querySelector('.abshov');
let project=document.querySelector('.project');
let p1=document.querySelector('.projectHeading');
let darklayer=document.querySelector('.babu');

let hamberger=document.querySelector('.hamberger');
let navd=document.querySelector('.nav-details');

let cross=document.querySelector('.cross');

let start=document.querySelector('.start');




setTimeout(() => {
     
    let wrapper=document.querySelector('.wrapper');
    
    start.style.display="none";
    wrapper.style.display="block";
    
},3000);








console.log(typeof p1);


hamberger.addEventListener('click',()=>{


    console.log("aundar AYA KYA");
    navd.style.display="flex";

    hamberger.style.display="none";


})

cross.addEventListener("click",()=>{

    console.log("croos click hua kya");
    navd.style.display="none";
    hamberger.style.display="block";

})




project1.addEventListener("mouseover",()=>{


    abshov1.classList.add('active');



})


project1.addEventListener("mouseleave", ()=>{


    abshov1.classList.remove('active')

})
project2.addEventListener("mouseover",()=>{


    abshov2.classList.add('active');



})


project2.addEventListener("mouseleave", ()=>{


    abshov2.classList.remove('active')

})
project3.addEventListener("mouseover",()=>{


    abshov3.classList.add('active');


})


project3.addEventListener("mouseleave", ()=>{


    abshov3.classList.remove('active')

})







console.log(typeof cerhead);



let count=1;
theme.addEventListener("click",()=>{


if(count===1)
{
        moon.classList.add('moonactive');
        sun.classList.remove('sunactive');

        count=0;
}

else
{
    moon.classList.remove('moonactive');
    sun.classList.add('sunactive');
    count=1;
}

   



changing.classList.toggle('cdark')


hero.classList.toggle('hero-dark');
aboutdark.classList.toggle('aboutdark')
skills.classList.toggle('skills-dark');
homeimg.classList.toggle('homeimgdark');

certificate.classList.toggle('cer-dark');



project.classList.toggle('projectdark');
cerhead[0].classList.toggle('headark');
cerhead[1].classList.toggle('headark');

// p1.classList.toggle('headark'); not working
// p2.classList.toggle('headark');
console.log('yaha tak aya kya');


darklayer.classList.toggle('darklayer');

})


