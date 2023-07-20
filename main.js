const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/conradocanas/",
  },
  {
    title: "Curriculum",
    url: "https://cv.conrado.ar/",
  },
  {
    title: "GitHub",
    url: "https://github.com/conradocanas",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/conradocanas",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/conradocanas",
  },
];

// Itineración que crea los items en "Experiencia"
for (i = 0; i < links.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `  <div class="link">
    <a href="${links[i].url}" target="_blank" rel="noopener noreferrer">${links[i].title}</a>
  </div>`;
  document.getElementById("links").appendChild(item);
}
