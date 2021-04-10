
// Mobile menu

    let menu = document.querySelector(".menu");     // menu icon element
    let navmenu = document.querySelector(".navmenu");   // nanmenu element

    // Open and close mobile menu
    // On click
    menu.addEventListener("click", ()=>{
        
        if(menu.innerText === "menu"){ 
            menu.innerText = "close";   // Change icon to close icon
        }else{
            menu.innerText = "menu";    // Change icon to menu icon
        }

        navmenu.classList.toggle("hidden"); // Toggle hidden class
    });


