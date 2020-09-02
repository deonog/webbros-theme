const menu = document.querySelector(".links-container");
const menuBtn = document.getElementById("menu-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.getElementById("menu-close-btn");
const spanAll = document.querySelectorAll("#menu-btn span");
const span = document.querySelector("#menu-btn span:first-child");
const spanTwo = document.querySelector("#menu-btn span:nth-child(2)");
const spanThree = document.querySelector("#menu-btn span:last-child");
const nav = document.querySelector("nav");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelectorAll("nav a");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const header = document.querySelector("header");
const hover = document.querySelector(".links-container a:hover");

console.log(hover);

if (header == null) {
  navbar.classList.add("fixed-nav");
  links.forEach(function(link) {
    link.classList.add("a-dark");
    link.classList.remove("a-light");
  });
} else {
  window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
      spanAll.forEach(function(span) {
        span.classList.remove("span-dark");
        span.classList.add("span-white");
      });

      //   links.forEach(function(link) {
      //     link.classList.remove("a-dark");
      //     link.classList.add("a-light");
      //   });
    } else {
      navbar.classList.remove("fixed-nav");
      spanAll.forEach(function(span) {
        span.classList.remove("span-light");
      });
      links.forEach(function(link) {
        link.classList.add("a-dark");
        link.classList.remove("a-light");
      });
    }
    // setup back to top link

    if (scrollHeight > 500) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });
}

menuBtn.addEventListener("click", function() {
  const fixedNav = navbar.classList.contains("fixed-nav");
  menu.classList.toggle("menu-open");
  overlay.classList.toggle("overlay-visible");
  const menuOpen = menu.classList.contains("menu-open");
  span.classList.toggle("menu-btn-open");
  spanTwo.classList.toggle("menu-btn-open-2");
  spanThree.classList.toggle("menu-close");

  if (!fixedNav && !menuOpen) {
    spanAll.forEach(function(span) {
      span.classList.add("span-white");
      span.classList.remove("span-dark");
    });
  } else {
    spanAll.forEach(function(span) {
      span.classList.add("span-dark");
      span.classList.remove("span-white");
    });
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position
    });
  });
});
