class Form{
    constructor(){

    }
    display(){
        var input= createInput("name")
        input.position(250,200)
        var button= createButton("play")
        button.position(270,250)
        button.mousePressed(function (){
            input.hide()
            button.hide()
            var name= input.value()
            playerCount++
            player.updateCount(playerCount)
            player.update(name)
            var greeting= createElement('h2')
            greeting.position(250,300)
            greeting.html("hi"+name)
        })
    }
}