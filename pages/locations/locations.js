const LocationContainer = document.getElementById("LocationContainer");

setNavButtonActive('Locations');

const LOCATIONS = [
  {
    name: "San Francisco Bay",
    image: "/pages/locations/images/01.jpg",
    tide_chart: "tide_charts/01.pdf",
    maps_link: "https://goo.gl/maps/sHsM8nCJJRj9CdrB6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Half Moon Bay",
    image: "/pages/locations/images/04.jpg",
    tide_chart: "tide_charts/04.pdf",
    maps_link: "https://goo.gl/maps/a8eF7vVX2e8nmV7U8",
    description:
      "Blandit libero volutpat sed cras ornare arcu dui vivamus. Purus gravida quis blandit turpis cursus in. Lacus vestibulum sed arcu non odio euismod lacinia. Donec pretium vulputate sapien nec sagittis aliquam. Et molestie ac feugiat sed lectus vestibulum. Suscipit tellus mauris a diam. Mattis enim ut tellus elementum sagittis vitae. Sit amet aliquam id diam. Lorem mollis aliquam ut porttitor. Sem nulla pharetra diam sit amet nisl suscipit. Ac auctor augue mauris augue neque gravida. Tincidunt dui ut ornare lectus sit. Neque laoreet suspendisse interdum consectetur libero id faucibus. Amet porttitor eget dolor morbi non arcu risus quis. Ac turpis egestas maecenas pharetra.",
  },
  {
    name: "Bodega Bay",
    image: "/pages/locations/images/05.jpg",
    tide_chart: "tide_charts/05.pdf",
    maps_link: "https://goo.gl/maps/Xv7iVyveTVePSAXR8",
    description:
      "Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Neque laoreet suspendisse interdum consectetur libero. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Donec pretium vulputate sapien nec. Nisl nunc mi ipsum faucibus vitae aliquet. Sodales ut etiam sit amet nisl. Placerat in egestas erat imperdiet sed euismod nisi. Euismod elementum nisi quis eleifend. Non curabitur gravida arcu ac tortor.",
  },
  {
    name: "Sacramento-San Joaquin Delta",
    image: "/pages/locations/images/02.jpg",
    maps_link: "https://goo.gl/maps/zNeqSHayvHxko24q6",
    description:
      "Et netus et malesuada fames ac. Justo donec enim diam vulputate ut. Placerat orci nulla pellentesque dignissim enim sit amet. Faucibus interdum posuere lorem ipsum dolor sit. Facilisis volutpat est velit egestas dui id ornare arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla. Ut enim blandit volutpat maecenas volutpat blandit. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Rhoncus mattis rhoncus urna neque viverra justo nec. Aliquet porttitor lacus luctus accumsan.",
  },
  {
    name: "Clear Lake",
    image: "/pages/locations/images/03.jpg",
    maps_link: "https://goo.gl/maps/Yo3zXzv7xaK42Qkh9",
    description:
      "Sed faucibus turpis in eu mi bibendum. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Amet massa vitae tortor condimentum lacinia quis vel eros. Netus et malesuada fames ac turpis. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Dui ut ornare lectus sit amet est. Commodo elit at imperdiet dui. Nibh cras pulvinar mattis nunc. Malesuada bibendum arcu vitae elementum. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis.",
  },
];

LOCATIONS.forEach(({ description, name, image, tide_chart }) => {
  const ListItem = document.createElement("li");
  const Image = document.createElement("img");
  const Description = document.createElement("p");
  const Title = document.createElement("h2");
  const LeftDiv = document.createElement("div");
  const RightDiv = document.createElement("div");
  const Download = document.createElement("a");

  LeftDiv.setAttribute("class", "left-div");
  RightDiv.setAttribute("class", "right-div");
  Image.setAttribute("class", "image");
  Description.setAttribute("class", "description");
  Title.setAttribute("class", "title");
  Image.src = image;
  Download.href = tide_chart;
  Download.setAttribute("download", "download");
  Download.appendChild(document.createTextNode("Download TIDE Charts"));

  Title.appendChild(document.createTextNode(name));
  Description.appendChild(document.createTextNode(description));

  LeftDiv.appendChild(Title);
  LeftDiv.appendChild(Description);
  LeftDiv.appendChild(Download);
  RightDiv.appendChild(Image);

  ListItem.appendChild(LeftDiv);
  ListItem.appendChild(RightDiv);

  LocationContainer.appendChild(ListItem);
});
