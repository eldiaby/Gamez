"use strict";
// Elemant variables
const newSectionVidoes = document.querySelectorAll("video");

// new games section play when hoved effect
for (const vidoe of newSectionVidoes) {
  vidoe.addEventListener("mouseover", (e) => vidoe.play());
}
for (const vidoe of newSectionVidoes) {
  vidoe.addEventListener("mouseout", () => vidoe.pause());
}
