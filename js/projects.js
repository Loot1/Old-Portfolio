const projects = [
    {
        image: "weather.webp",
        name: "Weather",
        tags: ["React-Native", "API"],
        description: "Projet de formation visant à créer une application mobile météo via l'API OpenWeatherMap.\nL'application permet de rechercher la météo par ville et le fond d'écran change en fonction du temps qu'il fait.",
        repository: "https://gitlab.com/Loot1/weather",
        page:""
    },
    {
        image: "experience-cordiste.webp",
        name: "Expérience Cordiste",
        tags: ["React-Native", "Expo"],
        description: "Projet de formation visant à créer une application mobile vitrine pour un artisan local.\nJ'ai pour cela choisi Expérience Cordiste, une entreprise de Amiens spécialisée dans les travaux en hauteur.",
        repository: "https://gitlab.com/Loot1/experience-cordiste",
        page:"projets/experience-cordiste.html"
    },
    {
        image: "gitloot.webp",
        name: "Gitloot",
        tags: ["Visual Studio Code API"],
        description: "Extension Visual Studio Code permettant d'envoyer son code via Git sur un repository distant d'un simple raccourci clavier via la palette de commandes du logiciel.\nJ'ai eu l'opportunité de me documenter sur Visual Studio Code, ce qui m'a permis de mieux appréhender le logiciel sur lequel je développe chaque jour.",
        repository: "https://gitlab.com/Loot1/gitloot",
    },
    {
        image: "justice.webp",
        name: "Justice",
        tags: ["DiscordJS"],
        description: "Bot Discord entretenant une liste d'utilisateurs dites liste noire avec un comportement inapproprié sur l'application.\nCe projet a été l'occasion pour moi de me pencher davantage sur le système de gestion de fichiers de NodeJS et d'apprendre à mieux connaître la librairie DiscordJS.",
        repository: "https://gitlab.com/Loot1/justice",
    },
    {
        image: "anonyme.webp",
        name: "Anonyme",
        tags: ["DiscordJS"],
        description: "Bot Discord dans le cadre d'une plateforme d'entraide permettant aux utilisateurs de s'exprimer en tout anonymat dans un salon prédéfini.\nUn projet très simple mais qui me tient à coeur car c'est sûrement mon projet qui a eu le plus de retour d'utilisateurs.",
        repository: "https://gitlab.com/Loot1/anonymous",
    },
    {
        image: "servers-manager.webp",
        name: "Servers Manager",
        tags: ["Shell"],
        description: "Script ayant comme fonctionnalité de gérer un ou plusieurs serveurs de jeux sous Debian. On peut démarrer, éteindre, redémarrer, afficher la console, voir le statut ou encore sauvegarder sous fichier ZIP le serveur de jeu.\nCela a été une vraie expérience totalement en dehors de ma zone de confort.",
        repository: "https://gitlab.com/Loot1/minecraft-servers-manager",
    }
]

const projectsMax = projects.length
const pagesMax = Math.ceil(projects.length/6)
const pageTitle = document.getElementById("page-title")
const pageProjects = document.getElementById("page-projects")
const pageButtons = document.getElementById("page-buttons")

function pageDisplay(page) {
    pageProjects.innerHTML = ""
    pageButtons.innerHTML = ""
    let first = 6*page-6
    for(let n = first; n < first+6; n++) {
        if(projectsMax <= n) break
        let project = projects[n]
        pageProjects.innerHTML += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                <div class="p-3 projectCard">
                    <div class="d-flex flex-row mb-3 align-items-center">
                        <img src="img/projects/${project.image}" alt="Logo du projet ${project.name}"
                            width="70px" height="70px" class="rounded"/>
                        <div class="d-flex flex-column ml-3">
                            <p class="text-white h4">${project.name}</p>
                            <p class="text-white h6">${project.tags.map(t => `#${t}`).join(" ")}</p>
                        </div>
                    </div>
                    ${project.description.split("\n").map(d => `<p>${d}</p>`).join("")}
                    <div class="row justify-content-end">
                        <a class="pr-3" href="${project.repository}" target="_blank">
                            <i class="fab fa-gitlab align-self-right"></i>
                        </a>
                        ${project.page 
                            ?
                            `
                            <a class="pr-3" href="${project.page}">
                                <i class="fas fa-eye align-self-right"></i>
                            </a>
                            `
                            : 
                            ""
                        }
                    </div>
                </div>
            </div>
        `
    }
    if(projectsMax > 6) {
        if(page !== 1) {
            pageButtons.innerHTML += `
                <a href="#" style="text-decoration:none;">
                    <div id="page-button-previous" onclick = "pageDisplay(${page-1})" style="display: flex; vertical-align: middle;">
                        <i class="fas fa-arrow-left" style="font-size: 150%;"></i>
                        <span style="padding-left: 15px;">Page précédente</span>
                    </div>
                </a>
            `
        }
        if(pagesMax > page) {
            pageButtons.innerHTML += `
                <a href="#" style="text-decoration:none;">
                    <div id="page-button-next" onclick = "pageDisplay(${page+1})" style="display: flex; vertical-align: middle;">
                        <span style="padding-right: 15px;">Page suivante</span>
                        <i class="fas fa-arrow-right" style="font-size: 150%;"></i>
                    </div>
                </a>
            `
        }
        if(pageButtons.children.length === 2) {
            document.getElementById("page-button-previous").style.paddingRight = "20px"
            document.getElementById("page-button-next").style.paddingLeft = "20px"
        }
    }
}

pageDisplay(1)