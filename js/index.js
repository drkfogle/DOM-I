const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('a');
nav[0].textContent = (siteContent['nav']['nav-item-1'])
nav[1].textContent = (siteContent['nav']['nav-item-2'])
nav[2].textContent = (siteContent['nav']['nav-item-3'])
nav[3].textContent = (siteContent['nav']['nav-item-4'])
nav[4].textContent = (siteContent['nav']['nav-item-5'])
nav[5].textContent = (siteContent['nav']['nav-item-6'])

const cta_text = document.querySelector('h1');
cta_text.textContent = (siteContent['cta']['h1'])

const cta_button = document.querySelector('button');
cta_button.textContent = (siteContent['cta']['button'])

const cta_img = document.getElementById('cta-img');
cta_img.setAttribute('src',siteContent["cta"]["img-src"])

const main_content = document.querySelectorAll('.top-content h4')
main_content[0].textContent = (siteContent['main-content']['features-h4']) 
main_content[1].textContent = (siteContent['main-content']['about-h4'])

const top_p = document.querySelectorAll('.top-content p')
top_p[0].textContent = (siteContent['main-content']['features-content'])
top_p[1].textContent = (siteContent['main-content']['about-content'])

const middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src',siteContent['main-content']['middle-img-src'])

const bottom_content = document.querySelectorAll('.bottom-content h4')
bottom_content[0].textContent = (siteContent['main-content']['services-h4'])
bottom_content[1].textContent = (siteContent['main-content']['product-h4'])

const bottom_text = document.querySelectorAll('.bottom-content p')
bottom_text[0].textContent = (siteContent['main-content']['services-content'])
bottom_text[1].textContent = (siteContent['main-content']['product-content'])


const contact_h = document.querySelector('.contact h4')
contact_h.textContent = (siteContent['contact']['contact-h4'])

const contact_p = document.querySelectorAll('.contact p')
contact_p[0].textContent = (siteContent['contact']['address'])
contact_p[1].textContent = (siteContent['contact']['phone'])
contact_p[2].textContent = (siteContent['contact']['email'])

const footer = document.querySelector('footer')
footer.textContent = (siteContent['footer']['copyright'])

nav.forEach(nav => nav.style.color = "green");

const navChild = document.createElement('a');
navChild.href = '#';
navChild.textContent = "Hello";
const home = document.querySelector('.cta h1')
home.appendChild(navChild);
navChild.style.color = "red";

const navChilddos = document.createElement('a');
navChilddos.href = '#';
navChilddos.textContent = "hola";
const casa = document.querySelector('.main-content');
casa.prepend(navChilddos);
navChilddos.style.color = "red";
