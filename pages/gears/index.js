setNavButtonActive('Gears');

const GEARS = [
  {
    name: "Moonshine Rod Co. The Vesper Series Fly Fishing Rod",
    price: 449.99,
    image: "images/01.jpg",
    amazon:
      "https://www.amazon.com/Moonshine-Rod-Co-Vesper-Fishing/dp/B089FMLXXC/ref=sr_1_1?dchild=1&keywords=Moonshine+Rod+Co.+The+Vesper+Series+Fly+Fishing+Rod&qid=1614062836&sr=8-1",
  },
  {
    name: "Lixada Fly Fishing Vest with Breathable Mesh for Outdoor Fishing Activities",
    price: 44.98,
    image: "images/02.jpg",
    amazon:
      "https://www.amazon.com/Lixada-Breathable-Polyester-Swimming-Floating/dp/B071XLNYNL/ref=sr_1_6?dchild=1&keywords=fishing%2Bjacket&qid=1614062890&sr=8-6&th=1",
  },
  {
    name: "Berkley Gulp! Saltwater Fishing Soft Bait",
    price: 6.99,
    image: "images/03.jpg",
    amazon:
      "https://www.amazon.com/Berkley-GSSHR3-NP-Gulp-Shrimp/dp/B001H0G150/ref=sr_1_58_sspa?dchild=1&keywords=fishing+gear&qid=1614063157&sr=8-58-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRFJBRzJOMjAxRjAmZW5jcnlwdGVkSWQ9QTA2MTQxMjlTVTVTVUNBRjUyNjYmZW5jcnlwdGVkQWRJZD1BMDM4MjgzMjFUNTUwRDNBNzI1Qk0md2lkZ2V0TmFtZT1zcF9idGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
  },
  {
    name: "Lifetime Tamarack Angler Sit-On-Top Kayak, Olive, 120",
    price: 530.99,
    image: "images/04.jpg",
    amazon:
      "https://www.amazon.com/Lifetime-Tamarack-Angler-Kayak-Olive/dp/B00JYUXUZO/ref=sr_1_5?dchild=1&keywords=fishing+kayak&qid=1614063296&sr=8-5",
  },
];

const GearsContainer = document.getElementById("GearsContainer");

GEARS.forEach(({ price, name, image, amazon }) => {
  const ListItem = document.createElement("li");
  const Image = document.createElement("img");
  const Price = document.createElement("label");
  const Title = document.createElement("h4");
  const LeftDiv = document.createElement("div");
  const RightDiv = document.createElement("div");
  const Link = document.createElement("a");

  LeftDiv.setAttribute("class", "left-div");
  RightDiv.setAttribute("class", "right-div");
  Image.setAttribute("class", "image");
  Price.setAttribute("class", "price");
  Title.setAttribute("class", "title");
  Link.setAttribute("class", "link");
  Link.href = amazon;
  Link.target = "_blank";
  Image.src = image;

  Link.appendChild(document.createTextNode("Buy now!"));
  Title.appendChild(document.createTextNode(name));
  Price.appendChild(document.createTextNode(`$${price}`));

  LeftDiv.appendChild(Title);
  LeftDiv.appendChild(Price);
  LeftDiv.appendChild(Link);

  RightDiv.appendChild(Image);

  ListItem.appendChild(LeftDiv);
  ListItem.appendChild(RightDiv);

  GearsContainer.appendChild(ListItem);
});
