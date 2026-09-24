const venueCoordinates = {
  "圓洲角體育館": [22.3742, 114.2046],
  "楊屋道體育館": [22.368, 114.116],
  "小西灣體育館": [22.2649, 114.248],
  "康盛體育館": [22.323, 114.258],
  "石硤尾公園體育館": [22.332, 114.162],
  "荔景體育館": [22.348, 114.126],
  "紅磡市政大廈體育館": [22.304, 114.188],
};

const scheduleRows = [
  ["2026-09-19", "圓洲角體育館", "13:30", "女子A", "橋家", "VVE 飛悅"],
  ["2026-09-19", "圓洲角體育館", "14:30", "女子A", "US", "FREEDOM"],
  ["2026-09-19", "圓洲角體育館", "15:30", "女子B", "南華", "Snappy"],
  ["2026-09-19", "圓洲角體育館", "16:30", "女子B", "Nowhere", "Firstblood"],
  ["2026-09-19", "圓洲角體育館", "17:30", "女子C", "YW", "小旭青"],
  ["2026-09-19", "圓洲角體育館", "18:30", "女子C", "AVATke", "Inside out"],
  ["2026-09-20", "楊屋道體育館", "09:30", "女子D", "德光", "芊謙"],
  ["2026-09-20", "楊屋道體育館", "10:30", "女子D", "International", "Yuk Ching"],
  ["2026-09-20", "楊屋道體育館", "11:30", "女子E", "VTY", "雁心"],
  ["2026-09-20", "楊屋道體育館", "12:30", "女子E", "諾恩", "小團座"],
  ["2026-09-20", "楊屋道體育館", "13:30", "女子F", "飛悅", "Garlic"],
  ["2026-09-20", "楊屋道體育館", "15:30", "女子F", "SNOW", "銀芽"],
  ["2026-09-20", "楊屋道體育館", "16:30", "女子G", "NVM", "旭少少"],
  ["2026-09-20", "楊屋道體育館", "17:30", "女子G", "Tak Ming Infinity", "Passion"],
  ["2026-09-20", "楊屋道體育館", "18:30", "女子H", "縱慕", "HEYE"],
  ["2026-09-20", "楊屋道體育館", "19:30", "女子H", "致逸", "Simple"],
  ["2026-09-26", "小西灣體育館", "09:30", "女子A", "橋家", "US"],
  ["2026-09-26", "小西灣體育館", "10:30", "女子A", "VVE 飛悅", "FREEDOM"],
  ["2026-09-26", "小西灣體育館", "11:30", "女子B", "南華", "Nowhere"],
  ["2026-09-26", "小西灣體育館", "12:30", "女子B", "Snappy", "Firstblood"],
  ["2026-09-26", "小西灣體育館", "13:30", "女子C", "YW", "AVATke"],
  ["2026-09-26", "小西灣體育館", "14:30", "女子C", "小旭青", "Inside out"],
  ["2026-09-26", "小西灣體育館", "15:30", "女子C", "德光", "International"],
  ["2026-09-27", "康盛體育館", "09:30", "女子D", "芊謙", "Yuk Ching"],
  ["2026-09-27", "康盛體育館", "10:30", "女子E", "VTY", "諾恩"],
  ["2026-09-27", "康盛體育館", "11:30", "女子E", "雁心", "小團座"],
  ["2026-09-27", "康盛體育館", "12:30", "女子F", "飛悅", "SNOW"],
  ["2026-09-27", "康盛體育館", "13:30", "女子F", "Garlic", "銀芽"],
  ["2026-09-27", "康盛體育館", "15:30", "女子G", "NVM", "Tak Ming Infinity"],
  ["2026-09-27", "康盛體育館", "16:30", "女子G", "旭少少", "Passion"],
  ["2026-09-27", "康盛體育館", "17:30", "女子H", "縱慕", "致逸"],
  ["2026-09-27", "康盛體育館", "18:30", "女子H", "HEYE", "Simple"],
  ["2026-10-03", "石硤尾公園體育館", "13:30", "女子A", "橋家", "FREEDOM"],
  ["2026-10-03", "石硤尾公園體育館", "14:30", "女子A", "VVE 飛悅", "US"],
  ["2026-10-03", "石硤尾公園體育館", "15:30", "女子B", "南華", "Firstblood"],
  ["2026-10-03", "石硤尾公園體育館", "16:30", "女子B", "Snappy", "Nowhere"],
  ["2026-10-03", "石硤尾公園體育館", "17:30", "女子C", "YW", "Inside out"],
  ["2026-10-03", "石硤尾公園體育館", "18:30", "女子C", "小旭青", "AVATke"],
  ["2026-10-03", "荔景體育館", "13:30", "女子D", "芊謙", "International"],
  ["2026-10-03", "荔景體育館", "14:30", "女子E", "VTY", "小團座"],
  ["2026-10-03", "荔景體育館", "15:30", "女子F", "Garlic", "SNOW"],
  ["2026-10-03", "荔景體育館", "16:30", "女子F", "飛悅", "銀芽"],
  ["2026-10-04", "紅磡市政大廈體育館", "09:30", "女子F", "Garlic", "SNOW"],
  ["2026-10-04", "紅磡市政大廈體育館", "10:30", "女子G", "NVM", "Passion"],
  ["2026-10-04", "紅磡市政大廈體育館", "11:30", "女子G", "旭少少", "Tak Ming Infinity"],
  ["2026-10-04", "紅磡市政大廈體育館", "12:30", "女子H", "縱慕", "Simple"],
  ["2026-10-04", "紅磡市政大廈體育館", "13:30", "女子H", "HEYE", "致逸"],
];

const matches = scheduleRows.map(([date, venue, time, group, home, away], index) => ({
  id: `vbahk-${index + 1}`,
  name: `${home} vs ${away}`,
  city: `${venue}, Hong Kong`,
  venue,
  date,
  time,
  type: "indoor",
  level: `女子組 · ${group}`,
  organizer: "VBAHK",
  sourceName: "VBAHK 2026 Championship schedule (14 Sep 2026)",
  sourceUrl: "https://www.vbahk.org.hk/",
  official: true,
  coords: venueCoordinates[venue],
}));

const map = L.map("map", { zoomControl: false }).setView([22.3, 114.16], 11);
L.control.zoom({ position: "topright" }).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
  maxZoom: 18,
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const list = document.querySelector("#matchList");
const resultCount = document.querySelector("#resultCount");
const heroCount = document.querySelector("#heroMatchCount");
const searchInput = document.querySelector("#searchInput");
let activeDate = "all";
let officialOnly = true;
let activeId = null;
const today = "2026-09-23";
const weekend = ["2026-09-26", "2026-09-27"];

const formatDate = (date) => {
  const value = new Date(`${date}T12:00:00`);
  return { day: value.getDate(), month: value.toLocaleDateString("en", { month: "short" }) };
};

function markerIcon(type) {
  return L.divIcon({
    className: "",
    html: `<div class="match-marker ${type}"><span>V</span></div>`,
    iconSize: [27, 27],
    iconAnchor: [13, 27],
    popupAnchor: [0, -25],
  });
}

function filteredMatches() {
  const query = searchInput.value.trim().toLowerCase();
  return matches.filter((match) => {
    const textMatch = !query || `${match.name} ${match.city} ${match.level} ${match.organizer}`.toLowerCase().includes(query);
    const sourceMatch = !officialOnly || match.official;
    const dateMatch = activeDate === "all" || (activeDate === "today" && match.date === today) ||
      (activeDate === "weekend" && weekend.includes(match.date));
    return textMatch && dateMatch && sourceMatch;
  });
}

function render() {
  const visible = filteredMatches();
  list.innerHTML = visible.length ? visible.map((match) => {
    const date = formatDate(match.date);
    return `<article class="match-card ${activeId === match.id ? "active" : ""}" data-id="${match.id}" tabindex="0">
      <div class="date-box"><strong>${date.day}</strong><small>${date.month}</small></div>
      <div><h3>${match.name}</h3><div class="match-meta"><span>${match.city}</span><span><i class="type-dot ${match.type}"></i>${match.type}</span></div><div class="source-meta">Official · ${match.organizer}</div></div>
    </article>`;
  }).join("") : `<p class="empty-state">No matches found. Try another search.</p>`;
  resultCount.textContent = `${visible.length} result${visible.length === 1 ? "" : "s"}`;
  heroCount.textContent = visible.length;
  markerLayer.clearLayers();
  visible.forEach((match) => {
    const marker = L.marker(match.coords, { icon: markerIcon(match.type) }).addTo(markerLayer);
    marker.bindPopup(`<strong>${match.name}</strong><br>${match.city}<br><small>${match.date} · ${match.time}</small><br><a href="${match.sourceUrl}" target="_blank" rel="noopener">Source: ${match.sourceName}</a>`);
    marker.on("click", () => { activeId = match.id; renderListOnly(); });
  });
  list.querySelectorAll(".match-card").forEach((card) => {
    card.addEventListener("click", () => selectMatch(Number(card.dataset.id)));
    card.addEventListener("keydown", (event) => { if (event.key === "Enter") selectMatch(Number(card.dataset.id)); });
  });
}

function renderListOnly() {
  list.querySelectorAll(".match-card").forEach((card) => card.classList.toggle("active", Number(card.dataset.id) === activeId));
}
function selectMatch(id) {
  const match = matches.find((item) => item.id === id);
  if (!match) return;
  activeId = id;
  map.flyTo(match.coords, 8, { duration: 0.8 });
  renderListOnly();
  const marker = markerLayer.getLayers().find((item) => item.getLatLng && item.getLatLng().equals(L.latLng(match.coords)));
  if (marker) marker.openPopup();
}

document.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
  activeDate = button.dataset.date;
  render();
}));
document.querySelector("#officialToggle").addEventListener("click", (event) => {
  officialOnly = !officialOnly;
  event.currentTarget.classList.toggle("selected", officialOnly);
  event.currentTarget.setAttribute("aria-pressed", officialOnly);
  render();
});
searchInput.addEventListener("input", render);
document.querySelector("#locateButton").addEventListener("click", () => {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(({ coords }) => map.flyTo([coords.latitude, coords.longitude], 7));
});

const backdrop = document.querySelector("#modalBackdrop");
document.querySelector("#addMatchButton").addEventListener("click", () => { backdrop.hidden = false; });
document.querySelector("#modalClose").addEventListener("click", () => { backdrop.hidden = true; });
backdrop.addEventListener("click", (event) => { if (event.target === backdrop) backdrop.hidden = true; });
document.querySelector("#matchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const [cityName, country] = data.get("city").split(",").map((part) => part.trim());
  const newMatch = { id: Date.now(), name: data.get("name"), city: `${cityName}${country ? `, ${country}` : ""}`, date: data.get("date"), time: "12:00", type: data.get("type"), level: "Community", organizer: "Community", sourceName: "Community submission", sourceUrl: "#", official: false, coords: [22.3, 114.16] };
  matches.unshift(newMatch);
  backdrop.hidden = true;
  event.currentTarget.reset();
  render();
});

render();
