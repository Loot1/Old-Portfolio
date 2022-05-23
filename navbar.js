function toggleNavbar() {
    const menu = document.getElementById("mobile-menu")
    menu.classList.toggle("hidden")
}

function themeIt() {
    for (element of document.getElementsByClassName("theme")) {
        if(element.classList.contains("bg-white")) {
            element.classList.toggle("bg-white")
            element.classList.toggle("bg-gray-800")
        } else if(element.classList.contains("bg-gray-800")) {
            element.classList.toggle("bg-gray-800")
            element.classList.toggle("bg-white")
        }
        if(element.classList.contains("text-white")) {
            element.classList.toggle("text-white")
            element.classList.toggle("text-gray-800")
        } else if(element.classList.contains("text-gray-800")) {
            element.classList.toggle("text-gray-800")
            element.classList.toggle("text-white")
        }
        if(element.classList.contains("border-gray-800")) {
            element.classList.toggle("border-gray-800")
            element.classList.toggle("border-white")
        } else if(element.classList.contains("border-white")) {
            element.classList.toggle("border-white")
            element.classList.toggle("border-gray-800")
        }
        if(element.classList.contains("hover:bg-gray-800")) {
            element.classList.toggle("hover:bg-gray-800")
            element.classList.toggle("hover:bg-white")
        } else if(element.classList.contains("hover:bg-white")) {
            element.classList.toggle("hover:bg-white")
            element.classList.toggle("hover:bg-gray-800")
        }
        if(element.classList.contains("hover:text-gray-800")) {
            element.classList.toggle("hover:text-gray-800")
            element.classList.toggle("hover:text-white")
        } else if(element.classList.contains("hover:text-white")) {
            element.classList.toggle("hover:text-white")
            element.classList.toggle("hover:text-gray-800")
        }
    }
}