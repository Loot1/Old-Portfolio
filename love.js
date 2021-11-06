function borneSize() {
    let margin = (0.0194664377803*window.innerWidth) - 4.3220813091679
    document.getElementById("borne").style.marginRight = `${margin}%`;
    document.getElementById("borne").style.marginLeft = `${margin}%`;
}

borneSize()

window.onresize = () => borneSize()