//loading the json file
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.querySelector(".photoGrid");

    data.forEach(building => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${building.building_picture}" alt="${building.name}">

        <div class = "nameText">
            <h5>${building.name}<h5>
        </div>

        <div class = "roomText">
            <h5>${building.rooms_available} rooms available<h5>
        </div>
      `;

      grid.appendChild(card);
    });
  });

  //toggle between open/closed door
  let doorOpen = true;
  let toggleDoor = document.querySelector(".logoWrapper");
  toggleDoor.addEventListener("click", toggleDoorFunction);

  function toggleDoorFunction() {
    if (doorOpen == true) {
        logo.src = "assets/freeroomsDoorClosed.png";
    } else {
        logo.src = "assets/freeRoomsLogo.png";
    }

    //update door state
    doorOpen = !doorOpen;
  }