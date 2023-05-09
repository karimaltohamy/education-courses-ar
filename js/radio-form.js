const radios = document.querySelectorAll(`input[name="certificates"]`);
const shippingService = document.querySelector(".shipping_service");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.getAttribute("data-service") === "shipping") {
      shippingService.classList.add("active");
    } else {
      shippingService.classList.remove("active");
    }
  });
});
