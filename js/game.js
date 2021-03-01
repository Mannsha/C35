class Game
{
    constructor()
    {

    }

    //gets state from firebase, reads value from database
    getState()
    {
        //goes to node in database to read node
        var gameStateRef = database.ref("gameState")

        //listens database value- ".on"
        //google "value" portion

        gameStateRef.on("value", function (data){

            //function updates changes in database, and stores into the gameState variable
            gameState = data.val()
        })
    }

    //updates value (state) from THIS game to firebase

    update(state)
    {
        //slash refers to main database/node that holds gameState and other direct nodes
        database.ref("/").update({

            //adds state from the game
            gameState: state
        })
    }

    start()
    {
        if(gameState===0)
        {
            //abstraction is using a class that has not been made yet
            player = new Player()
            player.getCount()

            form = new Form()
            form.display()
        }
    }
}