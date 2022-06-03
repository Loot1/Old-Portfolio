window.onload = () => {
    let date = new Date()
    let mat = date.getFullYear() - 2002
    if(date.getMonth() < 4 || (date.getMonth() == 4 && date.getDate() < 11)) mat = mat-1
    document.getElementById('age').innerText = document.getElementById('age').innerText.replace("%age%",`${mat} ans`)
}