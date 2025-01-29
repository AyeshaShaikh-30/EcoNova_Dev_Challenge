document.addEventListener("DOMContentLoaded", function () {
    const items = [
        { name: "Plastic Bag", image: "plastic-bag.png", allowed: true },
        { name: "Glass Bottle", image: "glass.png", allowed: false },
        { name: "Paper", image: "paper.png", allowed: false },
        { name: "Plastic Straw", image: "straw.png", allowed: true },
        { name: "Metal", image: "nuts.png", allowed: false },
        { name: "Snack Wrapper", image: "candy.png", allowed: true },
        { name: "Banana Peel", image: "banana.png", allowed: false },
        { name: "Plastic Spoon", image: "plasticspoon.png", allowed: true }
    ];

    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");
    const nextButton = document.createElement("button");
    const nextButtonContainer = document.createElement("div");
    nextButtonContainer.classList.add("next-button-container");

    nextButton.innerText = "Continue Your EcoBricking Quest";
    nextButton.style.display = "none"; // Hide initially
    nextButton.addEventListener("click", function() {
        window.location.href = "ecobrick.html"; // Change this to your actual next page URL
    });
    document.body.appendChild(nextButton);
    nextButtonContainer.appendChild(nextButton);
    document.body.appendChild(nextButtonContainer);

    let droppedItemsCount = 0;

    items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `<img src="${item.image}" alt="${item.name}"> ${item.name}`;
        itemDiv.draggable = true;
        itemDiv.setAttribute("data-allowed", item.allowed);
        itemDiv.setAttribute("ondragstart", "dragItem(event)");

        if (index % 2 === 0) {
            column1.appendChild(itemDiv);
        } else {
            column2.appendChild(itemDiv);
        }
    });

    // Dragging function
    window.dragItem = function (event) {
        // Set data to transfer when dragging the item
        event.dataTransfer.setData("text", event.target.outerHTML);
    };

    // Allow dropping in the bottle
    function allowDrop(event) {
        event.preventDefault();
    }

    // Drop function
    function dropItem(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        const draggedItem = tempDiv.firstChild;
        const isAllowed = draggedItem.getAttribute("data-allowed") === "true";

        // Get current items in each bottle
        const bottle1Items = document.getElementById("bottle1").children.length;
        const bottle2Items = document.getElementById("bottle2").children.length;

        // Check if the item is allowed and if there is space in the bottles
        if (isAllowed) {
            if (bottle1Items < 3) {
                document.getElementById("bottle1").appendChild(draggedItem);
                droppedItemsCount++;
            } else if (bottle2Items < 2) {
                document.getElementById("bottle2").appendChild(draggedItem);
                droppedItemsCount++;
            } else {
                // Both bottles are full, reject the item
                draggedItem.classList.add("rejected");
                setTimeout(() => draggedItem.classList.remove("rejected"), 1000);
            }
        } else {
            draggedItem.classList.add("rejected");
            setTimeout(() => draggedItem.classList.remove("rejected"), 1000);
        }

        // Check if all 4 items are dropped
        if (droppedItemsCount === 4) {
            nextButton.style.display = "block"; // Show next button
        }
    }

    // Attach the dropItem function to both bottles
    const bottles = document.querySelectorAll('.bottle');
    bottles.forEach(bottle => {
        bottle.addEventListener('dragover', allowDrop);
        bottle.addEventListener('drop', dropItem);
    });
});
