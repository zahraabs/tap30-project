
const toggler=document.querySelector(".nav__toggler");
const nav=document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
console.log("clicked");
nav.classList.toggle("expand");
toggler.classList.toggle("none");
})




const accordionHeader=document.querySelector(".accordion__header");
const accordion=document.querySelector(".accordion");

accordionHeader.addEventListener("click",(e)=>{
  accordion.classList.toggle("accordion__expand");
})

const accordionHeader1=document.querySelector(".accordion__header-second");
const accordion1=document.querySelector(".accordion-second");

accordionHeader1.addEventListener("click",(e)=>{
  accordion1.classList.toggle("accordion__expand1");
})

const accordionHeader2=document.querySelector(".accordion__header-third");
const accordion2=document.querySelector(".accordion-third");

accordionHeader2.addEventListener("click",(e)=>{
  accordion2.classList.toggle("accordion__expand2");
})


const accordionHeader3=document.querySelector(".accordion__header-fourth");
const accordion3=document.querySelector(".accordion-fourth");

accordionHeader3.addEventListener("click",(e)=>{
  accordion3.classList.toggle("accordion__expand3");
})