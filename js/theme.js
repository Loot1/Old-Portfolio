function changeTheme() {
    for (element of document.getElementsByClassName("theme")) {
        if(element.classList.contains("bg-white") || element.classList.contains("bg-gray-800")) {
            element.classList.toggle("bg-white")
            element.classList.toggle("bg-gray-800")
        }
        if(element.classList.contains("text-white") || element.classList.contains("text-gray-800")) {
            element.classList.toggle("text-white")
            element.classList.toggle("text-gray-800")
        }
        if(element.classList.contains("border-gray-800") || element.classList.contains("border-white")) {
            element.classList.toggle("border-gray-800")
            element.classList.toggle("border-white")
        }
        if(element.classList.contains("hover:bg-gray-800") || element.classList.contains("hover:bg-white")) {
            element.classList.toggle("hover:bg-gray-800")
            element.classList.toggle("hover:bg-white")
        }
        if(!element.classList.contains("theme-ignore-text-hover")) {
            if(element.classList.contains("hover:text-gray-800") || element.classList.contains("hover:text-white")) {
                element.classList.toggle("hover:text-gray-800")
                element.classList.toggle("hover:text-white")
            }
        }
        if(element.classList.contains("fa-sun") || element.classList.contains("fa-moon")) {
            element.classList.toggle("fa-sun")
            element.classList.toggle("fa-moon")
        }
    }
    if(document.getElementById("themeIcon").classList.contains("fa-sun") && localStorage.getItem("theme") == 'dark') localStorage.removeItem("theme")
    else if(localStorage.getItem("theme") === null) localStorage.setItem("theme", 'dark')
}

window.onload = () => {
    if(localStorage.getItem("theme") == 'dark') {
        changeTheme()
        document.getElementById("themeToggle").checked = true
    }
}