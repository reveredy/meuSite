export default function initScrollSuave() {
  const menuList = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const hreference = event.currentTarget.getAttribute("href");
    const section = document.querySelector(hreference);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  menuList.forEach((a) => {
    a.addEventListener("click", scrollToSection);
  });
}
