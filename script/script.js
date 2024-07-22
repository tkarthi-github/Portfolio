let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("link-content");

function handleClick(tablink){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-content")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tablink).classList.add("active-content");
}