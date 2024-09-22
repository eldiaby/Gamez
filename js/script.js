"use strict";
// Elemant variables
const newSectionVidoes = document.querySelectorAll("video");
const currentYear = new Date().getFullYear();

// new games section play when hoved effect
for (const vidoe of newSectionVidoes) {
  vidoe.addEventListener("mouseover", (e) => vidoe.play());
}
for (const vidoe of newSectionVidoes) {
  vidoe.addEventListener("mouseleave", () => vidoe.pause());
}

document.querySelector(".current-year").textContent = `${currentYear}`;
