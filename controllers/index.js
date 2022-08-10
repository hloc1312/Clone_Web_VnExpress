const getElement = (id) => {
  return document.getElementById(id);
};
const menu = getElement("menu-wrap");
const navigation = document.querySelector(".navigation");
const modal = document.querySelector(".modal-wrap");

// mở menu mobile{
const btnMobile = document.querySelector(".icon-menu-mobile");
btnMobile.onclick = () => {
  const menuMobile = document.querySelector(".menu-mobile");
  menuMobile.classList.toggle("show");
  modal.classList.toggle("show");
  if (modal.className.includes("show")) {
    const header = document.querySelector("header");
    header.style.zIndex = "20";
  }
};

// mở menu wrap
getElement("open-all").onclick = () => {
  menu.classList.toggle("show");
  if (modal.className.includes("show")) {
    modal.classList.remove("show");
  } else {
    modal.classList.add("show");
    navigation.style.zIndex = "99";
  }
};

// nút đóng menu wrap
getElement("close-wrap").onclick = () => {
  const value = menu.className;
  if (value.includes("show")) {
    menu.classList.remove("show");
  }
  if (modal.className.includes("show")) {
    modal.classList.remove("show");
    navigation.style.zIndex = "99";
  }
};

const more = (e) => {
  console.log(e);
  const hiddens = document.querySelectorAll(`.menu-wrap.${e}  li.hidden`);
  const moreBtn = document.querySelector(`.menu-wrap.${e} li:last-child a`);

  hiddens.forEach((val) => {
    if (val.className.includes("hidden")) {
      val.classList.toggle("show");
      moreBtn.innerHTML = "Thu nhỏ";
    }
    if (val.className === "hidden") {
      moreBtn.innerHTML = "Xem thêm";
    }
  });
  console.log(hiddens);
};

// scroll navigation
window.addEventListener("scroll", () => {
  navigation.classList.toggle("sticky", window.scrollY > 102);
});
