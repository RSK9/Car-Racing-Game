class Player {
    constructor(){

    }
    update(name){
        var index = "player"+ playerCount
        database.ref(index).set({
            name: name
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
           playerCount= data.val() 
        })
    }
}