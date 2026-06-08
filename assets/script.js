const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => links.classList.remove("open"));
  });
}

function sendToWhatsApp() {
  const form = document.querySelector(".contact-form");
  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const location = form.querySelector('[name="location"]').value.trim();
  const matter = form.querySelector('[name="matter"]').value;
  const message = form.querySelector('[name="message"]').value.trim();

  const text = `Assalamualaikum, I need legal consultation from Haider Law & Logic.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACity/Country: ${encodeURIComponent(location)}%0ALegal Matter: ${encodeURIComponent(matter)}%0ADescription: ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/923015770302?text=${text}`, "_blank");
}
