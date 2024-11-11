console.log("start");

const subCon = document.querySelector(".snb-con");
const subConHeight = subCon.offsetTop;

const scrollSub = () => {
  console.log("바보");
  if (window.scrollY > subConHeight) {
    subCon.classList.add("fixed");
  } else {
    subCon.classList.remove("fixed");
  }
};

window.onscroll = () => {
  scrollSub();
};
