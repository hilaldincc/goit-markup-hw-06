// 🔹 Menü Aç/Kapat
const menuOpen = document.getElementById("menu-open");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", function () {
  menu.classList.add("is-open-menu");
});

menuClose.addEventListener("click", function () {
  menu.classList.remove("is-open-menu");
});



// 🔹 Modal Aç/Kapat
const orderButton = document.getElementById('modal-button'); // Order Service butonun ID'si bu
const modal = document.getElementById('modal'); // Modal pencere
const modalClose = document.getElementById('modal-close'); // Modal kapatma butonu

// Order Service butonuna tıklanınca modal aç
orderButton.addEventListener('click', () => {
  modal.classList.add('is-open-modal');
});

// Modal kapatma butonuna tıklanınca modal kapanır
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open-modal');
});



