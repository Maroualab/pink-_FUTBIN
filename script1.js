const positions = document.querySelectorAll(".position");
const replacementPool = document.querySelector(".replacement-players");
const playerSelection = document.querySelector("#player-selection");

let playersData = [];

fetch("players.json")
.then((response) => response.json())
.then((data) => {
  playersData = data.players || [];
})
.catch((error) => console.error("Error loading JSON:", error));

positions.forEach((position) => {
position.addEventListener("click", () => {
    playerSelection.innerHTML = "";

  const positionName = position.getAttribute("data-position");
  assignPlayerToPosition(position, positionName);
});
});

function assignPlayerToPosition(positionElement, positionName) {
    const players = playersData.filter(
      (player) => player.position === positionName
    );

    if (players.length === 0) {
      alert("No players available for this position!");
      return;
    }

    createCard(players);
    addDragEvents(positionElement);
  }





    function addDragEvents(card) {
        card.addEventListener('dragstart', (event) => {
            // event.preventDefault(); 

          draggedCard = card;
          card.style.opacity = '0.5'; 
        });
      
        card.addEventListener('dragend', () => {
          card.style.opacity = '1'; 
        });
      
        card.addEventListener('dragover', (event) => {
          event.preventDefault(); 
          card.classList.add('drag-over');
        });
      
        card.addEventListener('dragleave', () => {
          card.classList.remove('drag-over'); 
        });
      
        card.addEventListener('drop', (event) => {
          event.preventDefault();
          card.classList.remove('drag-over');
          
          if (draggedCard !== card) {
            const temp = card.innerHTML;
            card.innerHTML = draggedCard.innerHTML;
            draggedCard.innerHTML = temp;
          }
        });
      }
    




    function createCard(players){

        playerSelection.innerHTML = "";
        players.forEach((player) => {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("replacement-player");
            playerDiv.setAttribute("draggable", "true");
    
            const card = document.createElement("div");
            card.classList.add("badge");
            card.style.position = " relative";
    
    
            const img = document.createElement("img");
            img.classList.add("player-photo");
            img.src = player.photo ;
            img.alt = `${player.name}'s photo` 
    
            const name = document.createElement("div")
            name.textContent = `${player.name}`
    
            
            const position = document.createElement("div")
            position.textContent = `${player.position}`
    
            const flag = document.createElement("img");
            flag.classList.add("flag");
            flag.src = player.flag ;
            flag.alt = `${player.name}'s photo` ;
    
            const club = document.createElement("img");
            club.classList.add("logo");
            club.src = player.logo ;
            club.alt = `${player.club}'s logo`;
    
            const stats = document.createElement('div');
    
            const pac = document.createElement('div');
            pac.classList.add('stat');
            pac.textContent= `PAC : ${player.pace}`;
          
            const sho = document.createElement('div');
            sho.classList.add('stat');
            sho.textContent= `SHO : ${player.shooting}`;
    
            const pas = document.createElement('div');        
            pas.classList.add('stat');
            pas.textContent= `PAS : ${player.passing}`;
    
            const dri = document.createElement('div');
            dri.classList.add('stat');
            dri.textContent= `DRI :${player.dribbling}`;
    
            const def = document.createElement('div');
            def.classList.add('stat');
            def.textContent= `DEF :${player.defending}`;
    
            const phy = document.createElement('div');
            phy.classList.add('stat');
            phy.textContent= `PHY :${player.physical}`;
            
        
            playerDiv.appendChild(card);
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(position);
            card.appendChild(flag);
            card.appendChild(club);
            card.appendChild(stats);
    
            stats.appendChild(pac)
            stats.appendChild(pas)
            stats.appendChild(sho)
            stats.appendChild(dri)
            stats.appendChild(def)
            stats.appendChild(phy)
    
            // createCard(playerDiv);
            addDragEvents(playerDiv);
            playerSelection.appendChild(playerDiv);
            // updateReplacementPool(remainingPlayers);
    
    
                })
        ;}



    //    create the drag and drop and then add the function to the required functionnalities 
    // function addDragEvents(element) {
    //     let draggedPlayer = null;


    //   element.addEventListener("dragstart", () => {
    //     draggedPlayer = element;
    //   });
  
    //   element.addEventListener("dragover", (event) => {
    //     event.preventDefault();
    //   });
  
    //   element.addEventListener("drop", (event) => {
    //     event.preventDefault();

    //     if (draggedPlayer && draggedPlayer !== element) {
    //       const tempContent = element.innerHTML;
    //       element.innerHTML = draggedPlayer.innerHTML;
    //       draggedPlayer.innerHTML = tempContent;
  
    //       element.setAttribute("draggable", "true");
    //       draggedPlayer.setAttribute("draggable", "true");
    //     }
    //   });
  
    //   element.addEventListener("dragend", () => {
    //     draggedPlayer = null;
    //   });
    // }