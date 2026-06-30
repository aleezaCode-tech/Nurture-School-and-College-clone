
let overlay = document.querySelector(".overlay");
let sideBar = document.querySelector(".sideBar");
let sideBarIcon = document.querySelector(".sideBar-icon");

// Make sure elements exist
console.log("Overlay:", overlay);
console.log("Sidebar:", sideBar);
console.log("Icon:", sideBarIcon);

// Initially hide sidebar and overlay
if (overlay) {
    overlay.style.display = "none";
}
if (sideBar) {
    sideBar.style.display = "none";
}

// Open sidebar when clicking the icon
if (sideBarIcon) {
    sideBarIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event bubbling
        
        if (overlay && sideBar) {
            overlay.style.display = "block";
            sideBar.style.display = "block";
            console.log("Sidebar opened");
        }
    });
}

// Close sidebar when clicking the overlay
if (overlay) {
    overlay.addEventListener("click", () => {
        if (overlay && sideBar) {
            overlay.style.display = "none";
            sideBar.style.display = "none";
            console.log("Sidebar closed");
        }
    });
}