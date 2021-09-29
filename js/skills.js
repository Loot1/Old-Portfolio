const levelnames = ["Débutant","Intermédiaire","Avancé","Maîtrise"]
const colornames = ["danger","warning","info","success"]
const categorynames = ["languages", "frameworks", "tools"]

const skills = {
    languages: [
        {title:"HTML", level:3},
        {title:"CSS", level:2},
        {title:"Java", level:1},
        {title:"JavaScript", level:3},
        {title:"Python", level:1},
        {title:"Shell", level:1},
        {title:"Dart", level:0}
    ],
    frameworks: [
        {title:"DiscordJS", level:3},
        {title:"NodeJS", level:2},
        {title:"React-Native", level:3},
        {title:"React", level:1},
        {title:"Flutter", level:0}
    ],
    tools: [
        {title:"Git", level:3},
        {title:"Visual Studio Code", level:3},
        {title:"Android Studio", level:2},
        {title:"Expo", level:2}
    ]
}

categorynames.forEach(element => {
    skills[element.toString()].forEach((data) => {
        document.getElementById(element).innerHTML += `
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        ${data.title}<br/>
        <div class="progress md-progress my-2" style="height: 16px; border-radius:20px">
            <div class="progress-bar bg-${colornames[data.level]}" role="progressbar" style="width: 100%">
                ${levelnames[data.level]}
            </div>
            </div>
        </div>
        `
    })
})