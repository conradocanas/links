const links = [

  {
    title: "GitHub",
    url: "https://github.com/conradocanas",
  },
  {
    title: "Curriculum",
    url: "https://cv.conrado.ar/",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/conradocanas",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/conradocanas",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/conradocanas/",
  },
];

const shuffledArray = shuffleArray(links)

// Itineración que crea los items en "Experiencia"
for (i = 0; i < shuffledArray.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `  <div class="link">
    <a href="${shuffledArray[i].url}" target="_blank" rel="noopener noreferrer">${shuffledArray[i].title}</a>
  </div>`;
  document.getElementById("links").appendChild(item);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}