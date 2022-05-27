x=0
y=0
draw_circle=""
draw_rect=""
var SpeechRecoginition = window.webkitSpeechRecognition
var recoginition = new SpeechRecoginition()
function start(){
     document.getElementById("status").innerHTML = "system is listening. please speak!"
     recoginition.start()
}
recoginition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "The Spech is now "+content
    if (content=="Circle") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        draw_circle="set"
    }
    if (content=="rectangle") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        draw_rect="set"
    }
    
}
function setup() {
    canvas=createCanvas(900,600)
}
function draw() {
    if (draw_circle=="set") {
        circle(x,y,60)
        document.getElementById("status").innerHTML="Circle has been drawn"
        draw_circle=""
    }
    if (draw_rect=="set") {
        rect(x,y,60,90)
        document.getElementById("status").innerHTML="Rectngle has been drawn"
        draw_rect=""
    }
}
