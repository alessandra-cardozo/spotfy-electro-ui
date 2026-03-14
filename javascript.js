const djs = [
  {
    name: "Alok",
    genre: "Brazilian Bass",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    description: "DJ brasileiro de projeção internacional, conhecido por hits marcantes e apresentações cheias de energia."
  },
  {
    name: "Martin Garrix",
    genre: "EDM",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    description: "Um dos nomes mais populares da música eletrônica, com tracks de festival e grande presença global."
  },
  {
    name: "David Guetta",
    genre: "EDM",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    description: "Referência mundial na fusão entre música pop e eletrônica, com décadas de sucesso."
  },
  {
    name: "Vintage Culture",
    genre: "House",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800&q=80",
    description: "Grande nome brasileiro do house, conhecido por sets envolventes e estética sonora sofisticada."
  },
  {
    name: "Tiësto",
    genre: "Progressive House",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    description: "Lenda da cena eletrônica, transitando entre trance, progressive house e EDM com enorme influência."
  },
  {
    name: "Armin van Buuren",
    genre: "Trance",
    image: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?auto=format&fit=crop&w=800&q=80",
    description: "Ícone do trance, famoso por melodias intensas, sets longos e uma base fiel de fãs."
  },
  {
    name: "Charlotte de Witte",
    genre: "Techno",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=800&q=80",
    description: "Um dos principais nomes do techno atual, com som forte, sombrio e performances impactantes."
  },
  {
    name: "KREAM",
    genre: "Deep House",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80",
    description: "Duo conhecido por remixes modernos e faixas com forte identidade no house e deep house."
  },
  {
    name: "R3HAB",
    genre: "EDM",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    description: "Artista com produções energéticas, colaborações globais e presença forte em playlists eletrônicas."
  },
  {
    name: "Don Diablo",
    genre: "Future House",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    description: "Reconhecido pelo future house, trazendo identidade futurista e muita inovação às produções."
  },
  {
    name: "Hardwell",
    genre: "EDM",
    image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=800&q=80",
    description: "Nome consagrado dos grandes festivais, com drops explosivos e sets de alta intensidade."
  },
  {
    name: "Fisher",
    genre: "House",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    description: "DJ com estilo descontraído e faixas house muito populares nas pistas ao redor do mundo."
  }
];

const djGrid = document.getElementById("djGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const emptyState = document.getElementById("emptyState");

function renderDjs(list) {
  djGrid.innerHTML = "";

  if (list.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  list.forEach((dj) => {
    const card = document.createElement("article");
    card.className = "dj-card";

    card.innerHTML = `
      <img src="${dj.image}" alt="${dj.name}">
      <div class="dj-info">
        <span class="dj-style">${dj.genre}</span>
        <h3>${dj.name}</h3>
        <p>${dj.description}</p>
      </div>
    `;

    djGrid.appendChild(card);
  });
}

function filterDjs() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;

  const filtered = djs.filter((dj) => {
    const matchesName = dj.name.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "all" || dj.genre === selectedGenre;
    return matchesName && matchesGenre;
  });

  renderDjs(filtered);
}

searchInput.addEventListener("input", filterDjs);
genreFilter.addEventListener("change", filterDjs);

renderDjs(djs);