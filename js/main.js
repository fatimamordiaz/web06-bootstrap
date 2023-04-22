console.log("Hola desde un script externo");

function changeColorToRed(){
    const refName = document.getElementById("name");
    refName.style.color = "red"
}
function changeColorToBlue(){
    const refName = document.getElementById("name");
    refName.style.color = "blue"
}
function changeColorToGreen(){
    const refName = document.getElementById("name");
    refName.style.color = "green"
}
function changeColorParagraph(color, refObj){
   console.log(refObj);
    refObj.style.color = color;
}
// esta primera es para resetear color
function resetColor () {
    const colorCollection = document.getElementsByClassName ("text-color");
    console.log(colorCollection);
    for (let i = 0; i < colorCollection.length; i++) {
        const element = colorCollection [i];
        element.style.color = "black";
    }

}