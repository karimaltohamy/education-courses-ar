const btns = document.querySelectorAll(".btn_profile");
const lineDetails = document.querySelector(".line_details");
const lineTabel = document.querySelector(".line_tabel");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");

    if (btn.getAttribute("data-section") === "details") {
      lineDetails.classList.add("active");
      lineTabel.classList.remove("active");
    } else if (btn.getAttribute("data-section") === "table") {
      lineTabel.classList.add("active");
      lineDetails.classList.remove("active");
    }
  });
});
