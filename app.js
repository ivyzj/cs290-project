const NavBar = document.getElementById("NavBar");

const PATHS = [
  { text: "Home", url: "/" },
  { text: "Locations", url: "/pages/locations/index.html" },
  { text: "Events", url: "/pages/events/index.html" },
  { text: "Gears", url: "/pages/gears/index.html" },
];

// NavBar
PATHS.forEach(({ text, url }) => {
  const ListItem = document.createElement("li");
  const NavButton = document.createElement("a");
  NavButton.href = url;
  NavButton.text = text;
  NavButton.id = text;
  NavButton.classList.add("nav-button");
  ListItem.classList.add("nav-list");
  ListItem.appendChild(NavButton);
  NavBar.appendChild(ListItem);
});

function setNavButtonActive(text) {
  const NavButton = document.getElementById(text)
  NavButton.classList.add("nav-button-active")
}
