!function(){function fadeout(){document.querySelector(".preloader").style.opacity="0",document.querySelector(".preloader").style.display="none"}var pageLink;window.onload=function(){window.setTimeout(fadeout,500)},window.onscroll=function(){var header_navbar=document.querySelector(".navbar-area"),sticky=header_navbar.offsetTop;window.pageYOffset>sticky?header_navbar.classList.add("sticky"):header_navbar.classList.remove("sticky");var backToTo=document.querySelector(".scroll-top");document.body.scrollTop>50||document.documentElement.scrollTop>50?backToTo.style.display="flex":backToTo.style.display="none"},document.querySelectorAll(".page-scroll").forEach(elem=>{elem.addEventListener("click",e=>{e.preventDefault(),document.querySelector(elem.getAttribute("href")).scrollIntoView({behavior:"smooth",offsetTop:-59})})});let navbarToggler=document.querySelector(".navbar-toggler");var navbarCollapse=document.querySelector(".collapse");let filterButtons;document.querySelectorAll(".page-scroll").forEach(e=>e.addEventListener("click",()=>{navbarToggler.classList.remove("active"),navbarCollapse.classList.remove("show")})),navbarToggler.addEventListener("click",(function(){navbarToggler.classList.toggle("active")})),(new WOW).init(),document.querySelectorAll(".portfolio-btn-wrapper button").forEach(e=>e.addEventListener("click",()=>{let filterValue=event.target.getAttribute("data-filter");iso.arrange({filter:filterValue})}));for(var elements=document.getElementsByClassName("portfolio-btn"),i=0;i<elements.length;i++)elements[i].onclick=function(){for(var el=elements[0];el;)"BUTTON"===el.tagName&&el.classList.remove("active"),el=el.nextSibling;this.classList.add("active")};var cu;new counterUp({start:0,duration:2e3,intvalues:!0,interval:100,append:" "}).start()}();const d=new Date;let year=d.getFullYear();document.getElementById("year").innerHTML=year;