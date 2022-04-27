//AOS JS
const galleryImage = document.querySelectorAll(".gallery-img");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "zoom-in";
  img.dataset.aosDelay = i * 100;
  //img.dataset.aosDuration = 1000;
});

AOS.init({
  once: false,
  duration: 2000,
});

//GSAP JS
gsap.registerPlugin(TextPlugin);
gsap.to(".efek-gsap", {
  duration: 3,
  delay: 1,
  text: "Ahmad Fatchur Roji Yahya",
});
gsap.to(".lead", {
  duration: 2,
  delay: 4,
  text: "Web Developer",
});
//animasi navbar
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });

//SUBMIT GOOGLE SPREAD
const scriptURL = "https://script.google.com/macros/s/AKfycbxkWwS_cd19r9E7Z5Ibb_QQEaiIKgeyV3e5aTEc-LyqHdtYEcqioy7SZx-31K9Ijj6J/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAllert = document.querySelector(".my-allert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol di submit diklik
  //tampilkan tombol loading , hilangkan tombol kirim

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim , hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //munculkan allert
      myAllert.classList.toggle("d-none");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

//TILT JS
VanillaTilt.init(document.querySelectorAll(".keyboard-box"), {
  max: 35,
  speed: 2000,
  //glare: true,
  //max-glare: 0.5
});
