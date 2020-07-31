class Game{
    constructor(){

    }
    updateState(state){
        database.ref('/').update({
            gameState : state
        })
    }
    getState(){
        database.ref('gameState').on("value",function(data){
           gameState= data.val() 
        })
    }
    start(){
        if (gameState===0){
            form=new Form()
            form.display()
            player=new Player()
            player.getCount()
        }
    }
}