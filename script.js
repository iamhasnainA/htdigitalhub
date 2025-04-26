const contextMenu = document.getElementById("contextMenu");

        // Show the context menu on right-click
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault(); // Prevent the default right-click menu
            contextMenu.style.display = "block"; // Show the custom menu
            contextMenu.style.left = `${event.pageX}px`; // Position at mouse X
            contextMenu.style.top = `${event.pageY}px`; // Position at mouse Y
        });

        // Hide the context menu on left-click
        document.addEventListener("click", () => {
            contextMenu.style.display = "none";
        });