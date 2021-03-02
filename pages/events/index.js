const EventsContainer = document.getElementById("EventsContainer");

setNavButtonActive('Events');

const events = [
  {
    name: "Oyster Festival",
    image: "images/01.jpg",
    where: "https://goo.gl/maps/Ph6qG6fJu9e5FxQa7",
    when: "04/05/2021, 6PM-10PM",
    description:
      "Convallis posuere morbi leo urna molestie at elementum eu. Posuere urna nec tincidunt praesent semper feugiat nibh. Lacus viverra vitae congue eu consequat ac. Ut tellus elementum sagittis vitae et. Risus in hendrerit gravida rutrum quisque non tellus. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Vitae semper quis lectus nulla at volutpat. Non odio euismod lacinia at quis risus sed vulputate odio. At augue eget arcu dictum varius duis. Ornare lectus sit amet est placerat in egestas erat imperdiet. Lobortis elementum nibh tellus molestie nunc non. Sit amet nisl suscipit adipiscing bibendum est ultricies.",
  },
  {
    name: "Fishing Market",
    image: "images/02.jpg",
    where: "https://g.page/Fish-Market-San-Mateo?share",
    when: "03/05/2021, 7AM-2PM",
    description:
      "Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Parturient montes nascetur ridiculus mus mauris vitae. Nulla at volutpat diam ut venenatis tellus in. Et malesuada fames ac turpis egestas. Tempor id eu nisl nunc mi ipsum. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Faucibus nisl tincidunt eget nullam. Elementum pulvinar etiam non quam. Nisi porta lorem mollis aliquam ut porttitor leo a diam. In pellentesque massa placerat duis. Sed faucibus turpis in eu mi bibendum. Pulvinar pellentesque habitant morbi tristique senectus et netus. Dictum non consectetur a erat nam at. Egestas pretium aenean pharetra magna ac placerat.",
  },
];

events.forEach(({ description, name, image, where, when }) => {
  const ListItem = document.createElement("li");
  const Image = document.createElement("img");
  const Description = document.createElement("p");
  const Title = document.createElement("h2");
  const LeftDiv = document.createElement("div");
  const RightDiv = document.createElement("div");
  const Place = document.createElement("a");
  const When = document.createElement("p");

  LeftDiv.setAttribute("class", "left-div");
  RightDiv.setAttribute("class", "right-div");
  Image.setAttribute("class", "image");
  Description.setAttribute("class", "description");
  Title.setAttribute("class", "title");
  Place.setAttribute("class", "place");
  Place.href = where;
  Place.target = "_blank";
  Image.src = image;

  Place.appendChild(document.createTextNode("Where"));
  Title.appendChild(document.createTextNode(name));
  Description.appendChild(document.createTextNode(description));
  When.appendChild(document.createTextNode(when));

  LeftDiv.appendChild(Title);
  LeftDiv.appendChild(Place);
  LeftDiv.appendChild(When);
  LeftDiv.appendChild(Description);
  RightDiv.appendChild(Image);

  ListItem.appendChild(LeftDiv);
  ListItem.appendChild(RightDiv);

  EventsContainer.appendChild(ListItem);
});


document.getElementById('submit').addEventListener('click', function(e){
  e.preventDefault();

  const request = new XMLHttpRequest();
  const url = "/api/subscribe";

  request.open("POST", url, true);

  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      // Clear inputs and show server response.
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").textContent = request.response;
    }
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const data = JSON.stringify({"name": name, "email": email});

  console.log("submit: %s", data);

  request.send(data);
})
